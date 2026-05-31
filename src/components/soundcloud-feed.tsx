import { typography } from "@/lib/theme";
import { getFeed } from "@/lib/utils/getFeed";
import { formatDate } from "date-fns";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./link";
import Separator from "./separator";
const SoundcloudFeed = async ({ slug }: { slug: string }) => {
  const feed = await getFeed(
    `https://feeds.soundcloud.com/users/soundcloud:users:339924587/sounds.rss`,
  );
  return (
    <ul className="py-5 flex flex-col tracking-tighter gap-5">
      <a href={feed.link} className="shadow-xl rounded-md shadow-blue-300 dark:shadow-emerald-950/80 my-5">
        <div className="relative w-full h-40 overflow-hidden rounded-md group ">
          <Image
            src={
              feed.image?.url ??
              "https://i1.sndcdn.com/avatars-D5ZwRHDLgbBHRe6Q-sOTQaQ-original.jpg"
            }
            alt={feed.image?.title ?? "feed cover image"}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            className="object-cover object-center transition-transform duration-300"
          />

          {/* Overlay gradient for contrast */}
          <div className="absolute inset-0 bg-linear-to-t from-emerald-950/60 via-black/20 to-transparent" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h2 className={`${typography.title} text-white`}>{feed.title}</h2>
            <h3 className="tracking-tighter font-bold text-lg line-clamp-2 text-white">
              {feed.description}
            </h3>
          </div>
        </div>
      </a>
      {feed.items.map((item) => (
        <div key={item.guid} className="">
          <li className="gap-2 flex flex-col ">
            <div className="flex justify-between flex-col h-full ">
              <Link
                href={`/music/${slug}/tracks/${item.guid?.replace("tag:soundcloud,2010:tracks/", "")}`}
                className={`${typography.subtitle} hover:underline transition-all ease-in-out duration-300`}>
                {item.title}
              </Link>

              {formatDate(item.isoDate as string, "EEEE, MMMM d, yyyy")}
            </div>
            <div>
              <p className={`${typography.paragraph} line-clamp-3`}>
                {item.contentSnippet}
              </p>
            </div>
          </li>
          <div className="flex flex-col ">
            {item.link && (
              <NavLink href={item.link} className="py-2">
                Listen on<span className="italic font-black"> Soundcloud</span>
              </NavLink>
            )}
          </div>

          <Separator m="mb-5 mt-10" />
        </div>
      ))}
    </ul>
  );
};

export default SoundcloudFeed;
