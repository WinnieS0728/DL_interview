import { getUsers } from "@/actions/getUsers";
import { dateFormatter } from "@/utils/dateFormatter";
import icons from "@icons";
import Image from "next/image";

interface props {
  userData: Awaited<ReturnType<typeof getUsers>>[number];
}

export default function UserCard({ userData }: props) {
  return (
    <>
      <article className='border-2 border-github_bg-400 p-4 rounded-xl flex flex-col gap-2 justify-center items-center'>
        <Image
          src={userData.avatar_url}
          alt={`${userData.id}-avatar-image`}
          priority
          width={16 * 2.5}
          height={16 * 2.5}
          className='aspect-square rounded-full'
        />
        <p className='text-xl'>{userData.login}</p>
      </article>
    </>
  );
}
