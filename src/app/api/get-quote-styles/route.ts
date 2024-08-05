import { getRandomQuote } from "@/helpers/random-quotes"

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    let quote: string = getRandomQuote()
    return Response.json({ "quote": quote })
}