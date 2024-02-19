'use server'

import { Octokit } from "octokit"

export async function getRepos({
    q = 'sort:stars',
    sort = 'stars',
    per_page = 5,
    page = 1,
    ...restProps
}: NonNullable<Parameters<typeof octokit.rest.search.repos>[0]>) {
    if (!q) {
        return []
    }

    const octokit = new Octokit()

    const res = await octokit.rest.search.repos({
        q,
        sort,
        per_page,
        page,
        ...restProps
    })

    return res.data.items
} 