import { getUsers } from "@/actions/getUsers";
import Image from "next/image";
import CardContainer from "./card container";
import { getFollowers } from "@/actions/getFollowers";
import icon from "@icons";
interface props {
  userData: Awaited<ReturnType<typeof getUsers>>[number];
}

export default async function UserCard({ userData }: props) {
  const followers = await getFollowers({
    url: userData.followers_url,
  });

  return (
    <>
      <CardContainer className="flex flex-col items-center justify-center gap-2">
        <Image
          src={userData.avatar_url}
          alt={`${userData.id}-avatar-image`}
          priority
          width={16 * 2.5}
          height={16 * 2.5}
          className="aspect-square rounded-full"
        />
        <p className="text-xl">{userData.login}</p>
        <div className="flex items-center gap-1">
          <icon.follower />
          {followers}
        </div>
      </CardContainer>
    </>
  );
}
