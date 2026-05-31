import Link from "next/link";
import { ReactNode } from "react";

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <Link
        href={href}
        className={`hover:opacity-80 ease-in-out transition-all duration-100 ${className}`}>
        {children}
      </Link>
    </>
  );
};

export default NavLink;
