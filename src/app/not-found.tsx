import Header from "@/components/header";
import { typography } from "@/lib/theme";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full py-5 tracking-tighter">
      <Header
        to="/"
        linkIcon="←"
        linkLabel="back home"
        title="404"
        subtitle="Page not found"
        noservice={true}
      />
      <div className="py-10 flex flex-col gap-6 text-center">
        <p className={`${typography.paragraph} text-lg italic font-medium`}>
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 font-bold transition-colors ease-in-out duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
