import type { ReactNode } from "react";

export const metadata = {
  title: "Westside Realty CRM",
  description: "CRM workspace scaffold",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
