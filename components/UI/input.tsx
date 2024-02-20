import { cn } from "@/utils/cn";
import React, { InputHTMLAttributes } from "react";

export default function Input({
  type = "text",
  className,
  ...restProps
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        type='text'
        className={cn(
          "border-2 rounded-md px-2 py-1 text-white bg-github_black-500",
          className
        )}
        {...restProps}
      />
    </>
  );
}
