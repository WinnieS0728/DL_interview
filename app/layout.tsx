import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/layout/header";

export const metadata: Metadata = {
  title: "TW Join interview",
  description: "interview of TW Join",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-github_bg-500 text-white'>
        <Header />
        {children}
      </body>
    </html>
  );
}
