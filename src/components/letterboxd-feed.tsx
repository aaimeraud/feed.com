import { typography } from "@/lib/theme";
import * as format from "@/lib/utils/formatters";
import { getFeed } from "@/lib/utils/getFeed";
import { formatDate } from "date-fns";
import Link from "next/link";
import NavLink from "./link";
import Separator from "./separator";



const LetterboxdFeed = async ({ slug }: { slug: string }) => {
  const feed = await getFeed(`https://letterboxd.com/${slug}/rss/`);
  return (
    <ul className="py-5 flex flex-col tracking-tighter gap-5">
      {feed.items.map((item) => (
        <div key={item.guid}>
          <li className="gap-2 flex flex-col">
            <div className="flex justify-between flex-col h-full">
              <Link
                href={`/letterboxd/${slug}/${item.guid}`}
                className={`${typography.subtitle} hover:underline transition-all ease-in-out duration-300`}>
                {slug === "crew"
                  ? item.title
                  : format.title(item.title as string)}
              </Link>
              {slug === "crew" ? (
                ""
              ) : (
                <span className={typography.paragraph}>
                  Rated: {format.rating(item.title as string) ?? "N/A"}
                </span>
              )}
              {formatDate(item.isoDate as string, "EEEE, MMMM d, yyyy")}
            </div>
            <div>
              <p className={`${typography.paragraph} line-clamp-3`}>
                {item.contentSnippet}
              </p>
            </div>
          </li>
          {item.link && (
            <NavLink href={item.link} className="py-2">
              Read on <span className="italic font-black"> letterboxd</span>
            </NavLink>
          )}
          <Separator m="mb-5 mt-10" />
        </div>
      ))}
    </ul>
  );
};

export default LetterboxdFeed;
