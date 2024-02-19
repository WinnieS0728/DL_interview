import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className='bg-github_black-500 p-4'>
      <h1>
        <Link href={"/"}>GitHub Repo search engine</Link>
      </h1>
    </header>
  );
}
