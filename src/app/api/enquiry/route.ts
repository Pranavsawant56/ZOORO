import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = "dakshwork999@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Receives website enquiries from the contact / homepage forms and emails
 * them via Resend. Requires RESEND_API_KEY in the environment; without it,
 * the enquiry is only logged (so local dev without a key still works).
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const email = String(data.email ?? "").trim();
  const company = String(data.company ?? "").trim();
  const service = String(data.service ?? "").trim();
  const people = String(data.people ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name, phone number and a valid email." },
      { status: 422 },
    );
  }

  console.log("New ZOORO enquiry:", { name, phone, email, company, service, people, message });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set; enquiry was only logged, not emailed.");
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const rows: [string, string][] = [
      ["Name", name],
      ["Phone", phone],
      ["Email", email],
      ["Company", company],
      ["Service", service],
      ["People per day", people],
      ["Message", message],
    ];

    await resend.emails.send({
      from: "ZOORO Website <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New enquiry: ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New enquiry from the ZOORO website</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          ${rows
            .filter(([, v]) => v)
            .map(
              ([k, v]) =>
                `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(k)}</td><td>${escapeHtml(v).replace(/\n/g, "<br/>")}</td></tr>`,
            )
            .join("")}
        </table>
      `,
    });
  } catch (err) {
    console.error("Failed to send enquiry email:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your enquiry right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
