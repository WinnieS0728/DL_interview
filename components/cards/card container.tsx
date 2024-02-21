import { cn } from "@/utils/cn";
import React, { HTMLAttributes, ReactNode } from "react";

interface props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function CardContainer({
  children,
  className,
  ...props
}: props) {
  return (
    <>
      <article
        className={cn(
          "rounded-xl border-2 border-github_bg-400 p-4 transition-transform hover:scale-105",
          className,
        )}
        {...props}
      >
        {children}
      </article>
    </>
  );
}
