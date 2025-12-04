import { navigationItems } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="w-full" aria-label="Main navigation">
      <div className="container-header flex items-center justify-between py-2 lg:py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Premier Markets"
            width={160}
            height={45}
            priority
            className="w-24 h-auto md:w-32 lg:w-40"
          />
        </Link>

        {/* Center section - Hamburger (Mobile/Tablet) or Navigation (Desktop) */}
        <div className="flex justify-center">
          {/* Hamburger Menu - Mobile/Tablet */}
          <button
            className="lg:hidden flex items-center justify-center w-14 h-14 hover:text-red transition"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              aria-hidden="true"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Navigation - Desktop */}
          <ul
            className="flex items-center gap-8 text-base font-normal max-lg:hidden"
            role="list"
          >
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group hover:text-red flex items-center gap-2"
                >
                  {item.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.33301 5.66699L7.99967 10.3337L12.6663 5.66699"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#"
                className="text-red font-semibold hover:opacity-80 flex items-center gap-2"
              >
                Partner with us
                <Image
                  src="/arrow-right.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="object-contain"
                  aria-hidden="true"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="md:block bg-red text-white px-7 py-2 rounded-full text-sm lg:text-base font-semibold hover:opacity-90 transition"
            aria-label="Register account"
          >
            Register
          </Link>

          <Link
            href="#"
            className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition"
            aria-label="User account"
          >
            <Image
              src="/user.svg"
              alt=""
              width={20}
              height={20}
              className="object-contain"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
