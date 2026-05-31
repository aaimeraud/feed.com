import NavLink from "@/components/link";
import { typography } from "@/lib/theme";
import * as format from "@/lib/utils/formatters";
import { getFeed } from "@/lib/utils/getFeed";
import { formatDate } from "date-fns";
import Link from "next/link";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ slug: string; itemId: string }>;
}) {
  const { slug, itemId } = await params;

  // Import des feeds
  const { aaimeraud } = await import("@/lib/feeds/soundcloud");

  // Trouver le feed correspondant au slug
  const feedConfig = aaimeraud.find((f) => f.slug === slug);

  if (!feedConfig) {
    return <div>Feed not found</div>;
  }

  const feed = await getFeed(feedConfig.url);

  // Trouvez l'item correspondant - le guid peut être au format "tag:soundcloud,2010:tracks/{itemId}"
  const item = feed.items.find((i) => i.guid?.endsWith(itemId));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="w-full py-5">
      <div
        className="py-5 flex flex-col gap-3 border-b-2"
        style={{ borderColor: "var(--border-main)" }}>
        <Link
          href={`/music/${slug}`}
          className="font-bold hover:gap-3 hover:pl-2 flex gap-1 py-3 transition-all ease-in-out duration-300">
          <span>←</span> back to @{format.capitalize(slug)}
        </Link>
        <h1 className={typography.title}>{item.title}</h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Posted on {formatDate(item.isoDate as string, "EEEE, MMMM d, yyyy")}
        </p>
      </div>

      <div className="py-5 flex flex-col gap-5">
        {item.link && (
          <NavLink href={item.link} className="">
            Listen on <span className="italic font-black"> Soundcloud</span>
          </NavLink>
        )}
        <p
          className={`${typography.paragraph} text-xl leading-relaxed whitespace-pre-wrap`}>
          {item.contentSnippet}
        </p>
      </div>
    </div>
  );
}
