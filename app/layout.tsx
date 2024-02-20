import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/layout/header";
import ReactQueryProvider from "@/providers/react query";
import SearchInput from "@/components/search input";
import TagLinks from "@/components/tag links";
import icons from "@icons";
import Footer from "@/layout/footer";

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
      <ReactQueryProvider>
        <body className="bg-github_bg-500 text-white">
          <Header />
          <main className="px-2 lg:px-20 xl:px-40">
            <section className="flex items-center justify-center gap-4 p-8">
              <icons.search />
              <SearchInput />
            </section>
            <TagLinks />
            {children}
          </main>
          <Footer />
        </body>
      </ReactQueryProvider>
    </html>
  );
}
