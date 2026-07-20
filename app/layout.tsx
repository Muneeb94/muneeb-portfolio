import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Muneeb Ur Rehman — Software Engineer | Android & Frontend Developer",
  description:
    "Portfolio of Syed Muneeb Ur Rehman, a Software Engineer with 7+ years building Android and React web applications.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Syed Muneeb Ur Rehman — Software Engineer",
    description:
      "7+ years building Android (Kotlin) and React web applications. Open to Android & Frontend roles.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
