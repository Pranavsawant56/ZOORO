import { NextResponse } from "next/server";

/**
 * Receives website enquiries from the contact / homepage forms.
 *
 * The client shows a spinner until this responds, so the round-trip here is
 * what the loader is waiting on. Replace the TODO with real delivery
 * (email provider, CRM, database) when you're ready.
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

  if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name, phone number and a valid email." },
      { status: 422 },
    );
  }

  // TODO: send the enquiry by email or save it to your database.
  console.log("New ZOORO enquiry:", {
    name,
    phone,
    email,
    company: data.company,
    service: data.service,
    people: data.people,
    message: data.message,
  });

  return NextResponse.json({ ok: true });
}
