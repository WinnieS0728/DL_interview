import React from "react";
import { Octokit } from "octokit";

export default async function Test() {
  const octokit = new Octokit({ auth: "" });

  const data = await octokit.rest.search.repos({
    q: "",
    sort: "stars",
  });

  console.log(data);

  return <div>Test</div>;
}
