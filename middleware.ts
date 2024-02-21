import { NextResponse } from "next/server"

export function middleware(req: Request) {
    const requestHeaders = new Headers(req.headers)

    const searchValue = req.url.split('?search=')[1]

    requestHeaders.set('x-search-value', searchValue)

    return NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })
}