"use client";
import { getRepos } from "@/actions/getRepos";
import { getUsers } from "@/actions/getUsers";
import { getTailwindColor } from "@/utils/get tailwind color";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Select from "react-select";

export default function SearchInput() {
  const [input, setInput] = useState<string>("");
  const { data: repoData, isPending: isRepoDataPending } = useQuery({
    queryKey: ["searchInput", "getRepos", input],
    queryFn: async () => {
      return (
        await getRepos({
          q: input,
          per_page: 3,
        })
      ).map((data) => ({
        label: data.name,
        value: data.id,
      }));
    },
  });
  const { data: userData, isPending: isUserDataPending } = useQuery({
    queryKey: ["searchInput", "getUsers", input],
    queryFn: async () => {
      return (
        await getUsers({
          q: input,
          per_page: 3,
        })
      ).map((data) => ({
        label: data.login,
        value: data.id,
      }));
    },
  });

  // console.log(repoData);
  // console.log(userData);
  const a = [];
  if (repoData && userData) {
    a.push(...repoData);
    a.push(...userData);
  }
  return (
    <>
      <Select
        id='searchInput'
        options={a}
        isLoading={isRepoDataPending || isUserDataPending}
        onInputChange={(value) => {
          setInput(value);
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            neutral0: getTailwindColor("github_black", "500"),
            neutral80: getTailwindColor("white"),
            primary25: getTailwindColor("github_bg", "500"),
            primary: getTailwindColor("white"),
          },
        })}
      />
    </>
  );
}
