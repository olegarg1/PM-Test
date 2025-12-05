import Image from "next/image";
import HeroCurve from "./HeroCurve";

export default function Hero() {
  return (
    <section
      className="relative w-full pt-20 pb-40 overflow-hidden"
      style={{
        background: `linear-gradient(270.43deg, var(--red) 4.8%, var(--red-transparent) 103.15%), linear-gradient(102.87deg, var(--red-darker) -27.78%, var(--red-dark) 2.52%)`,
      }}
    >
      <div className="container-content grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-[70px] font-hero font-semibold max-md:leading-[1.1] mb-6">
            Trade Forex
            <br />
            with Premier
            <br />
            Markets
          </h1>

          <p className="text-lg text-white max-w-[384px] mb-10 mx-auto md:mx-0 leading-[1.4]">
            Access global markets with advanced trading tools, competitive
            spreads, and institutional grade execution.
          </p>

          <div className="flex flex-wrap gap-4 lg:gap-10 justify-center md:justify-start">
            <button className="bg-white text-red font-semibold px-6 py-2.5 md:px-8 md:py-3 lg:px-[34px] lg:py-3.5 text-sm md:text-base rounded-full hover:bg-gray-50 hover:shadow-lg transition">
              Start Trading
            </button>

            <button className="border border-white text-white font-semibold px-6 py-2.5 md:px-8 md:py-3 lg:px-[34px] lg:py-3.5 text-sm md:text-base rounded-full hover:bg-white hover:text-red transition">
              Try Demo Account
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE - Layered Phone */}
        <div className="max-md:hidden relative flex top-12 pt-6 -mt-8 md:-mt-16">
          {/* Rear Phone - Behind */}
          <div className="relative">
            <Image
              src="/rear-phone.svg"
              alt=""
              width={420}
              height={700}
              className="object-contain drop-shadow-xl z-0  md:-translate-y-[-150px] lg:-translate-y-[-50px] md:w-[320px] lg:w-[420px]"
              priority
              aria-hidden="true"
            />
            {/* Front Phone */}
            <Image
              src="/front-phone.svg"
              alt="Trading App"
              width={420}
              height={700}
              className="absolute top-0 left-0 object-contain drop-shadow-xl z-10 -translate-x-[-65px]  md:-translate-x-[-60px] lg:-translate-x-[-95px] md:-translate-y-[-120px] lg:-translate-y-[-0px] md:w-[320px] lg:w-[420px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* CURVE OVERLAY */}
      <HeroCurve />
    </section>
  );
}
