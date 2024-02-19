'use server'

import { Octokit } from "octokit"

export async function getUsers({
    q = 'sort:followers',
    sort = 'followers',
    per_page = 5,
    page = 1,
    ...restProps
}: NonNullable<Parameters<typeof octokit.rest.search.users>[0]>) {
    if (!q) {
        return []
    }
    const octokit = new Octokit()

    const res = await octokit.rest.search.users({
        q,
        sort,
        per_page,
        page,
        ...restProps
    })

    return res.data.items
} 