import Header from "@/components/header";
import { letterboxd } from "@/lib/feeds/letterboxd";
import { aaimeraud } from "@/lib/feeds/soundcloud";
import DisplayFeeds, {
  displayFeedsProps,
} from "@/sections/homepage/letterboxd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Browse through selected Letterboxd and Soundcloud accounts",
  openGraph: {
    title: "AimeRSS - Home",
    description:
      "Browse through selected Letterboxd and Soundcloud accounts",
    type: "website",
  },
};

const f: displayFeedsProps[] = [
  {
    service: "letterboxd",
    subtitle: "Wanna watch a movie? I got you.",
    array: letterboxd,
    folder: "letterboxd",
  },
  {
    service: "Music",
    subtitle: "My latest songs",
    array: aaimeraud,
    folder: "music",
  },
];

export default function Home() {
  return (
    <div className="w-full py-5 tracking-tighter">
      <Header noservice />
      {f.map((feed) => (
        <DisplayFeeds key={feed.folder} {...feed} />
      ))}
    </div>
  );
}
