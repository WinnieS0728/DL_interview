"use client";
import { myDebounce } from "@/utils/debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Input from "./UI/input";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const searchValue = searchParams.get("search") ?? "";

  const setDebounceInputToSearchParams = myDebounce((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) {
      params.delete("search");
    } else {
      params.set("search", value);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 1500);

  return (
    <>
      <Input
        className="sm:w-1/3 sm:min-w-[30rem]"
        onChange={(e) => {
          const value = e.target.value;
          setDebounceInputToSearchParams(value);
        }}
        defaultValue={searchValue}
      />
    </>
  );
}
