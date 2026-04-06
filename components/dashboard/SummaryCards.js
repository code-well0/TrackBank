"use client";

import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function SummaryCards() {
  const cards = [
    {
      title: "Total Balance",
      amount: 14500.50,
      trend: "+2.5%",
      isPositive: true,
      icon: Wallet,
      color: "text-blue-600 dark:text-blue-500",
      bgBase: "bg-blue-100 dark:bg-blue-500/20"
    },
    {
      title: "Monthly Income",
      amount: 5240.20,
      trend: "+12.1%",
      isPositive: true,
      icon: TrendingUp,
      color: "text-emerald-600 dark:text-emerald-500",
      bgBase: "bg-emerald-100 dark:bg-emerald-500/20"
    },
    {
      title: "Monthly Expenses",
      amount: 2843.00,
      trend: "-4.2%",
      isPositive: false,
      icon: TrendingDown,
      color: "text-rose-600 dark:text-rose-500",
      bgBase: "bg-rose-100 dark:bg-rose-500/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-white dark:bg-zinc-950 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${card.bgBase} ${card.color}`}>
              <card.icon size={22} className="stroke-[1.5px]" />
            </div>
            <div className={`text-sm font-medium px-2.5 py-1 rounded-full ${card.isPositive
              ? "text-emerald-700 bg-emerald-100/50 dark:text-emerald-400 dark:bg-emerald-500/10"
              : "text-rose-700 bg-rose-100/50 dark:text-rose-400 dark:bg-rose-500/10"
              }`}>
              {card.trend}
            </div>
          </div>
          <div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-1">{card.title}</p>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {formatCurrency(card.amount)}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
