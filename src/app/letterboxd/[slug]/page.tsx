import Header from "@/components/header";
import LetterboxdFeed from "@/components/letterboxd-feed";
import * as format from "@/lib/utils/formatters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letterboxd",
  description:
    "Browse my curated Letterboxd movie collections including reviews and ratings",
  keywords: ["movies", "Letterboxd", "reviews", "film"],
  openGraph: {
    type: "website",
    url: "https://feed.fortundaniel.com/letterboxd/",
    title: "Letterboxd",
    description: "Browse my curated Letterboxd movie collections",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Letterboxd Collections",
      },
    ],
  },
};

export default async function RSSReader({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="w-full py-5">
      {/* header */}
      <Header
        to="/"
        linkIcon="←"
        linkLabel="back home"
        title={format.capitalize(slug)}
        noservice={false}
        subtitle="These movies are either awesome or amazingly trash"
        serviceLink="https://letterboxd.com/"
      />
      {/* feed */}
      <LetterboxdFeed slug={slug} />
    </div>
  );
}
