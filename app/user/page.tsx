import { getUsers } from "@/actions/getUsers";
import UserCard from "@/components/cards/user card";
import { headers } from "next/headers";
import Link from "next/link";

export default async function UserResultPage() {
  const headerList = headers();
  const searchValue = headerList.get("x-search-value") || "";

  const users = await getUsers({
    q: searchValue,
    per_page: 10,
  });

  if (!users.length) {
    return (
      <h3 className="py-8 text-center text-xl uppercase">
        no user has been found
      </h3>
    );
  }

  return (
    <>
      <p className="my-1 text-center">
        the follower number is not correct because github search api has rate
        limit. <br />
        but the list is still sort by followers.
      </p>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 py-4">
        {users.map((user) => (
          <Link key={user.id} href={user.html_url} target="_blank">
            <UserCard userData={user} />
          </Link>
        ))}
      </section>
    </>
  );
}
