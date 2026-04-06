"use client";

import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { BalanceChart } from "@/components/dashboard/BalanceChart";
import { SpendingChart } from "@/components/dashboard/SpendingChart";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 font-medium text-sm mb-2">
          {/* Optional small text like the review stars in the image, but the user said "just add slogan nothing else" */}
        </div>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.1]">
          Track your spending, <br className="hidden md:block"/>
          be your own banking.
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mt-4">
          Here&apos;s a summary of your financial activity. All in one place.
        </p>
      </div>
      
      <SummaryCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BalanceChart />
        </div>
        <div className="lg:col-span-1">
          <SpendingChart />
        </div>
      </div>
    </div>
  );
}
