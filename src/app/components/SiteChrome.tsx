"use client";

import { usePathname } from "next/navigation";

export default function SiteChrome({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome && header}
      <main className="flex-1">{children}</main>
      {!isHome && footer}
    </>
  );
}
