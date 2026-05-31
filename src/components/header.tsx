import { typography } from "@/lib/theme";
import Link from "next/link";

type HeaderProps = {
  to?: string;
  linkLabel?: string;
  linkIcon?: string;
  titleIcon?: string;
  title?: string;
  subtitle?: string;
  service?: string;
  serviceLink?: string;
  noservice?: boolean;
};

const Header = ({
  to = "https://fortunedaniel.com",
  linkLabel = "my portfolio",
  linkIcon = "✱",
  titleIcon = "@",
  title = "AimeRSS",
  subtitle = "A collection of rss feeds",
  service = "letterboxd",
  serviceLink,
  noservice = false,
}: HeaderProps) => {
  return (
    <div
      className="py-5 flex flex-col gap-3 border-b-2"
      style={{ borderColor: "var(--border-main)" }}>
      <Link href={to} className={typography.nav}>
        <span>{linkIcon}</span> {linkLabel}
      </Link>
      <h1 className={typography.title}>
        <span className="text-sm align-top ">{titleIcon}</span> {title}
      </h1>
      <p className={typography.secondary}>{subtitle}</p>

      {noservice ? (
        " "
      ) : (
        <p className={typography.secondary}>
          from{" "}
          <a href={serviceLink} className="underline">
            {service}
          </a>
        </p>
      )}
    </div>
  );
};

export default Header;
