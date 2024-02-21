
export async function getFollowers({ url, page = 1 }: { url: string, page?: number }) {
    const followNumber = await getFollowNumber({
        url,
        page
    })
    if (followNumber === 100) {
        return getFollowers({
            url,
            page: page += 1
        })
    } else {
        return 100 * (page - 1) + followNumber
    }
}


const limitPage = Math.floor(Math.random() * 10) + 1

async function getFollowNumber({
    url,
    page
}: {
    url: string,
    page: number
}) {
    const restNumber = Math.floor(Math.random() * 100) + 1

    if (page === limitPage) {
        return restNumber
    } else {
        return 100
    }

    // ! api request limit
    // const req = await fetch(`${url}?per_page=100&page=${page}`)
    // if (!req.ok) {
    //     return 0
    // }
    // const list: any[] = await req.json()
    // return list.length
}