import { marketItems } from "@/data/markets";
import Image from "next/image";

export default function MarketsOverview() {
  return (
    <div className="w-full py-6 pt-8">
      <div className="container-content">
        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 pb-[2px]">
          <div className="flex gap-6 lg:gap-8">
            {marketItems.map((market) => (
              <div
                key={market.id}
                className="min-w-[200px] lg:min-w-[284px] h-[54px] lg:h-[78px] bg-white shadow-md rounded-full px-2.5 lg:px-4 flex items-center justify-between font-inter"
              >
                <div className="flex items-center gap-1.5 lg:gap-3">
                  <Image
                    src={market.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="lg:w-8 lg:h-8"
                  />
                  <div className="font-bold text-[12px] lg:text-sm">
                    {market.symbol}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 lg:gap-3">
                  <Image
                    src="/micro-chart-red.svg"
                    alt=""
                    width={28}
                    height={12}
                    className="lg:w-[39px] lg:h-[18px]"
                  />
                  <div className="flex flex-col items-end">
                    <div className="text-[12px] lg:text-sm font-bold">
                      {market.price}
                    </div>
                    <div className="text-red text-[12px] lg:text-sm font-bold">
                      {market.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
