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
  const feed = await getFeed(`https://letterboxd.com/${slug}/rss/`);

  // Trouvez l'item correspondant
  const item = feed.items.find((i) => i.guid === itemId);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="w-full py-5">
      <div
        className="py-5 flex flex-col gap-3 border-b-2"
        style={{ borderColor: "var(--border-main)" }}>
        <Link
          href={`/letterboxd/${slug}`}
          className="font-bold hover:gap-3 hover:pl-2 flex gap-1 py-3 transition-all ease-in-out duration-300">
          <span>←</span> back to @{format.capitalize(slug)}
        </Link>
        <h1 className={typography.title}>
          {slug === "crew" ? item.title : format.title(item.title as string)}
        </h1>
        {slug !== "crew" ? (
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Reviewed on{" "}
            {formatDate(item.isoDate as string, "EEEE, MMMM d, yyyy")}
          </p>
        ) : (
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Posted on {formatDate(item.isoDate as string, "EEEE, MMMM d, yyyy")}
          </p>
        )}
        {slug !== "crew" && (
          <p
            className="text-lg font-semibold"
            style={{ color: "var(--text-secondary)" }}>
            Rated: {format.rating(item.title as string) ?? "n/a"}
          </p>
        )}
      </div>

      <div className="py-5 flex flex-col gap-5">
        {slug !== "crew" && (
          <h2 className={typography.subtitle}>
            Here&apos;s what{" "}
            <NavLink href={item.link as string} className="underline">
              {format.capitalize(item.creator as string)}
            </NavLink>{" "}
            said about &quot;{format.title(item.title as string)}&quot; :
          </h2>
        )}
        <p
          className={`${typography.paragraph} text-xl leading-relaxed whitespace-pre-wrap`}>
          {item.contentSnippet}
        </p>

        {item.link && (
          <NavLink href={item.link} className="">
            Read on <span className="italic font-black"> letterboxd</span>
          </NavLink>
        )}
      </div>
    </div>
  );
}
