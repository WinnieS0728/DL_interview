import { getRepos } from "@/actions/getRepos";
import RepoCard from "@/components/cards/repo card";
import { headers } from "next/headers";
import Link from "next/link";

export default async function RepoResultPage() {
  const headerList = headers();
  const searchValue = headerList.get("x-search-value") || "";

  const repos = await getRepos({
    q: searchValue,
    per_page: 10,
  });

  if (!repos.length) {
    return (
      <section className="py-8 text-center text-xl uppercase">
        no repo has been found
      </section>
    );
  }

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] grid-rows-[repeat(3,auto)] gap-4 py-4">
      {repos.map((repo) => (
        <Link key={repo.id} href={repo.html_url} target="_blank">
          <RepoCard repoData={repo} />
        </Link>
      ))}
    </section>
  );
}
