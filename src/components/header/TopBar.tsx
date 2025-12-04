import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <nav
      className="w-full border-b border-gray-border relative"
      aria-label="Top navigation"
    >
      <div className="container-header font-semibold flex justify-between items-center h-10 text-xs sm:text-sm relative">
        <div className="flex items-center gap-2 sm:gap-2 h-full">
          <Link
            href="#"
            className="relative h-full flex items-center hover:text-red topbar-link-hover"
          >
            Personal
          </Link>
          <span className="text-gray-divider max-sm:hidden" aria-hidden="true">
            |
          </span>
          <Link
            href="#"
            className="relative h-full flex items-center hover:text-red topbar-link-hover"
          >
            Institutional
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 h-full">
          <Link
            href="#"
            className="relative h-full flex items-center hover:text-red topbar-link-hover"
          >
            WebTrader
          </Link>
          <span className="text-gray-divider max-sm:hidden" aria-hidden="true">
            |
          </span>
          <Link
            href="#"
            className="relative h-full flex items-center hover:text-red topbar-link-hover"
          >
            Support
          </Link>
          <span className="text-gray-divider max-sm:hidden" aria-hidden="true">
            |
          </span>
          <Link
            href="#"
            className="relative h-full flex items-center hover:text-red topbar-link-hover"
          >
            Open Demo
          </Link>
          <span className="text-gray-divider max-sm:hidden" aria-hidden="true">
            |
          </span>
          <Link
            href="#"
            className="relative h-full flex items-center gap-1 pl-1 text-xs  hover:text-red topbar-link-hover"
          >
            <Image
              src="/flag-uk.svg"
              alt=""
              width={20}
              height={20}
              className="object-contain"
              aria-hidden="true"
            />
            <span>EN</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
