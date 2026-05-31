import { typography } from "@/lib/theme";
import { feed } from "@/lib/types/rss";
import { capitalize } from "@/lib/utils/formatters";
import Link from "next/link";

export type displayFeedsProps = {
  service: string;
  subtitle: string;
  array: feed[];
  folder?: string;
};

const DisplayFeeds = ({
  service,
  subtitle,
  array,
  folder,
}: displayFeedsProps) => {
  return (
    <>
      <div className="pt-5">
        <h2 className={`font-bold ${typography.subtitle}`}>
          {capitalize(service)}
        </h2>
        <p className={typography.paragraph}>{subtitle}</p>
      </div>
      <div className="flex flex-col gap-4 my-5 w-full">
        {array.map((feed) => (
          <Link
            key={feed.slug}
            href={`/${folder}/${feed.slug}`}
            className="flex border px-5 justify-between w-full rounded-xl py-5  hover:px-6 items-center ease-in-out transition-all duration-400">
            <span className="font-bold text-xl">{feed.title}</span>
            <span className={`text-lg text-end ${typography.paragraph}`}>
              fetched from
              <span className="italic font-black">
                {" "}
                {feed.from.toLowerCase()}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default DisplayFeeds;
