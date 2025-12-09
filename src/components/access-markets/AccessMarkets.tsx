import { marketCards } from "@/data/market-cards";
import Image from "next/image";

export default function AccessMarkets() {
  return (
    <section className="relative w-full py-20 text-white overflow-hidden md:-mt-3 lg:-mt-10 z-40">
      {/* === FULL BACKGROUND  === */}
      {/* 1. BASE GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(139deg, #110001 35.63%, #3B0000 127.07%)",
        }}
      />

      {/* 2. DIAGONAL BLUR OVERLAY */}
      <div className="absolute inset-0">
        <Image
          src="/diagonal-red.svg"
          alt=""
          fill
          className="object-cover opacity-[0.72]"
        />
      </div>

      {/* 3. RADIAL GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/ellipse.svg"
          alt=""
          fill
          className="object-cover mix-blend-overlay opacity-[0.85]"
        />
      </div>

      {/* 4. STRIPES OVERLAY (on top) */}
      <div className="absolute inset-0">
        <Image
          src="/bg-group.svg"
          alt=""
          fill
          className="object-cover mix-blend-overlay opacity-60"
        />
      </div>

      {/* === CONTENT === */}
      <div className="container-content relative z-10 text-center">
        {/* Title */}
        <div className="mb-4 flex justify-center">
          <Image
            src="/access-markets-title.svg"
            alt="Access 17,000+ markets all in one"
            width={600}
            height={120}
            className="w-full max-w-3xl"
          />
        </div>

        {/* Subtitle */}
        <p className="text-white/80 max-w-xl mx-auto mb-12">
          Trade forex, shares, indices, and commodities with competitive
          spreads, deep liquidity, and seamless execution.
        </p>

        {/* Pill Buttons */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-10 mb-16">
          <div
            className="rounded-full p-[1px]"
            style={{
              background: `linear-gradient(90deg, var(--red) 0%, var(--red-pink) 100%)`,
            }}
          >
            <div
              className="backdrop-blur px-6 py-3 rounded-full flex items-center gap-2 w-full"
              style={{
                background: `linear-gradient(90deg, var(--red-pill-start) 0%, var(--red-pill-end) 100%)`,
              }}
            >
              <Image
                src="/coin.svg"
                width={24}
                height={24}
                alt=""
                className="flex-shrink-0 w-6 h-6"
              />
              <span className="text-sm font-medium whitespace-nowrap">
                $0 Deposit Fees
              </span>
            </div>
          </div>

          <div
            className="rounded-full p-[1px]"
            style={{
              background: `linear-gradient(90deg, var(--red) 0%, var(--red-pink) 100%)`,
            }}
          >
            <div
              className="backdrop-blur px-6 py-3 rounded-full flex items-center gap-2 w-full h-full"
              style={{
                background: `linear-gradient(90deg, var(--red-pill-spreads-start) 0%, var(--red-pill-spreads-end) 100%)`,
              }}
            >
              <Image
                src="/spreads.svg"
                width={22}
                height={20}
                alt=""
                className="flex-shrink-0 w-[22px] h-[20px]"
              />
              <span className="text-sm font-medium whitespace-nowrap">
                Spreads from 0.0 pips
              </span>
            </div>
          </div>

          <div
            className="rounded-full p-[1px]"
            style={{
              background: `linear-gradient(90deg, var(--red-border-secure-start) 0%, var(--red-border-secure-end) 100%)`,
            }}
          >
            <div
              className="backdrop-blur px-6 py-3 rounded-full flex items-center gap-2 w-full"
              style={{
                background: `linear-gradient(90deg, var(--red-pill-secure-start) 0%, var(--red-pill-secure-end) 100%)`,
              }}
            >
              <Image
                src="/secure.svg"
                width={27}
                height={27}
                alt=""
                className="flex-shrink-0 w-6 h-6"
              />
              <span className="text-sm font-medium whitespace-nowrap">
                Secure Funds
              </span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {marketCards.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-full lg:w-full h-auto min-h-[312px] rounded-[40px] p-[2px] hover:-translate-y-2 transition cursor-pointer group"
              style={{
                background: `linear-gradient(180deg, var(--red-light) 0%, var(--red) 62.02%)`,
              }}
            >
              <div className="bg-white text-black rounded-[40px] p-6 shadow-lg flex flex-col gap-4 h-full">
                <Image src={card.icon} width={50} height={50} alt="" />
                <h3
                  className="font-hero text-[26px] leading-[130%] tracking-normal text-left"
                  style={{ fontWeight: 400 }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 text-left flex-1">
                  {card.description}
                </p>
                <button
                  type="button"
                  className="mt-auto send-icon-button"
                  aria-label={card.ariaLabel}
                >
                  <svg
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                    className="w-10 h-10"
                  >
                    <rect
                      width="39"
                      height="39"
                      rx="19.5"
                      transform="matrix(-1 0 0 1 39 0)"
                      fill="currentColor"
                      className="transition-colors"
                    />
                    <path
                      d="M25.6074 12.6719L13.9224 24.3569"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.6074 21.2437V12.6719H17.0356"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
