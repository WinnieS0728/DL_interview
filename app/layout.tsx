import SearchInput from "@/components/search input";
import TagLinks from "@/components/tag links";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import icons from "@icons";
import type { Metadata } from "next";
import "./globals.scss";
import { Suspense } from "react";

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
    <html lang="en">
      <body className="bg-github_bg-500 text-white">
        <Header />
        <main className="px-2 lg:px-20 xl:px-40">
          <Suspense>
            <section className="flex items-center justify-center gap-4 p-8">
              <icons.search className="text-xl" />
              <div className="space-y-1">
                <p>type repo / user name</p>
                <SearchInput />
              </div>
            </section>
          </Suspense>
          <Suspense>
            <TagLinks />
          </Suspense>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
