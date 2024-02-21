import { getRepos } from "@/actions/getRepos";
import { dateFormatter } from "@/utils/dateFormatter";
import icons from "@icons";
import Image from "next/image";
import CardContainer from "./card container";

interface props {
  repoData: Awaited<ReturnType<typeof getRepos>>[number];
}

export default function RepoCard({ repoData }: props) {
  return (
    <>
      <CardContainer className="row-span-3 grid grid-rows-subgrid gap-2">
        <div className="flex items-center justify-between">
          <p className="text-xl">{repoData.name}</p>
          <div className="flex items-center gap-1">
            <icons.star />
            {repoData.stargazers_count}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {repoData.owner?.avatar_url && (
            <Image
              src={repoData.owner?.avatar_url}
              alt={`${repoData.owner?.login}-avatar-image`}
              priority
              width={16 * 2.5}
              height={16 * 2.5}
              className="aspect-square rounded-full"
            />
          )}
          {repoData.owner?.login}
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm text-github_black-100/80 ">last update</p>
          <p>{dateFormatter(repoData.updated_at)}</p>
        </div>
      </CardContainer>
    </>
  );
}
