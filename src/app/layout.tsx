import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Theorem — Where Learning is Forged Through Practice",
  description:
    "Upload your CBSE notes and let AI forge personalized exam-style assessments in seconds. Turn any chapter into exam-ready practice.",
  keywords: ["CBSE", "exam preparation", "AI quiz", "question generator", "study material"],
  authors: [{ name: "Theorem" }],
  openGraph: {
    title: "Theorem — Forge Better Questions",
    description: "AI-powered CBSE assessment platform. Upload notes, get exam-ready questions instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
