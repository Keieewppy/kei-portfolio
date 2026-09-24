import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-bricolage",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Chaitanya Yadav (Kei) · Software Developer",
  description:
    "Software developer building Flutter and React Native apps and Node.js backends. Co-founder of BeClazo.",
  openGraph: {
    title: "Chaitanya Yadav (Kei) · Software Developer",
    description: "I build apps people can actually use.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${bricolage.variable} ${plex.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
