"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

type pages = "repo" | "user";

export default function TagLinks() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  function getSearchValue() {
    const searchValue = searchParams.get("search");
    if (!searchValue) {
      return "";
    }
    return `?search=${searchValue}`;
  }

  const nowPage: pages = useMemo(() => {
    switch (true) {
      case pathname.includes("user"):
        return "user";

      default:
        return "repo";
    }
  }, [pathname]);

  return (
    <>
      <section className='grid grid-cols-2 justify-center items-center'>
        <Link
          href={`/${getSearchValue()}`}
          className={cn(
            "text-center border px-4 py-2 rounded-tl-md rounded-bl-md",
            {
              "bg-github_bg-400": nowPage === "repo",
            }
          )}
        >
          repos
        </Link>
        <Link
          href={`/user${getSearchValue()}`}
          className={cn(
            "text-center border px-4 py-2 rounded-tr-md rounded-br-md",
            {
              "bg-github_bg-400": nowPage === "user",
            }
          )}
        >
          users
        </Link>
      </section>
    </>
  );
}
