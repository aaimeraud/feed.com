import Header from "@/components/header";
import SoundcloudFeed from "@/components/soundcloud-feed";
import * as format from "@/lib/utils/formatters";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soundcloud Tracks",
  description: "My latest Soundcloud tracks and music releases",
  keywords: ["music", "Soundcloud", "tracks", "audio"],
  openGraph: {
    type: "website",
    url: "https://feed.fortundaniel.com/music/",
    title: "Soundcloud Tracks",
    description: "My latest Soundcloud tracks and music releases",
    images: [
      {
        url: "https://i1.sndcdn.com/avatars-D5ZwRHDLgbBHRe6Q-sOTQaQ-original.jpg",
        alt: "Soundcloud Profile",
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

  // Importer et valider le slug
  const { aaimeraud } = await import("@/lib/feeds/soundcloud");
  const feedConfig = aaimeraud.find((f) => f.slug === slug);

  if (!feedConfig) {
    return <div>Feed not found</div>;
  }

  return (
    <div className="w-full py-5">
      {/* header */}
      <Header
        to="/"
        linkIcon="←"
        linkLabel="back home"
        title={format.capitalize(slug).replace("-", " ")}
        noservice={true}
        subtitle="I haven't made any in a long time but it's always nice to look back at what we've done"
        service="Soundcloud"
        serviceLink="https://feeds.soundcloud.com/users/soundcloud:users:339924587/sounds.rss"
      />
      {/* feed */}
      <SoundcloudFeed slug={slug} />
    </div>
  );
}
