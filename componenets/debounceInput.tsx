"use client";

import { myDebounce } from "@/utils/debounce";
import { useEffect, useState } from "react";

export default function DebounceInput() {
  const [value, setValue] = useState<string>("");
  const setInputValue = myDebounce((input: string) => {
    setValue(input);
  }, 1000);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <input
        type='text'
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
        }}
      />
    </>
  );
}
