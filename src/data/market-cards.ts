import { MarketCard } from "@/types/market-cards";

export const marketCards: MarketCard[] = [
  {
    id: "forex",
    title: "Forex",
    description:
      "Trade the world’s largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
    icon: "/coin.svg",
    ariaLabel: "Learn more about Forex",
  },
  {
    id: "stocks",
    title: "Stocks",
    description:
      "From Wall Street to global tech leaders, follow the world’s leading companies and react to market moves in real time.",
    icon: "/stocks.svg",
    ariaLabel: "Learn more about Stocks",
  },
  {
    id: "indices",
    title: "Indices",
    description:
      "Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.",
    icon: "/analytics-pie.svg",
    ariaLabel: "Learn more about Indices",
  },
  {
    id: "commodities",
    title: "Commodities",
    description:
      "Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.",
    icon: "/earth.svg",
    ariaLabel: "Learn more about Commodities",
  },
];
