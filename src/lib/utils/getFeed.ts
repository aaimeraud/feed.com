import Parser from "rss-parser"



const parser = new Parser()

export const getFeed = async (feedUrl: string) => {
    const res = await fetch(feedUrl, {
        next: { revalidate: 300 } // en secondes, ici 5 minutes
    })
    const xml = await res.text()
    return parser.parseString(xml)
}