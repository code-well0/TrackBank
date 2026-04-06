"use client";

import { PieChart, TrendingUp, AlertCircle, Sparkles, ArrowRight } from "lucide-react";

export function InsightsCards() {
  const insights = [
    {
      id: 1,
      title: "Spending Concentration",
      description: "You spent ₹1,500 on Housing this month, which is 30% of your total budget.",
      icon: PieChart,
      color: "text-amber-600 dark:text-amber-500",
      bgClass: "bg-amber-100 dark:bg-amber-500/20",
      action: "Review Categories",
      progress: 30, // percentage
      progressColor: "bg-amber-500"
    },
    {
      id: 2,
      title: "Savings Rate",
      description: "You spent 12% less than last month. Great job keeping expenses down!",
      icon: TrendingUp,
      color: "text-emerald-600 dark:text-emerald-500",
      bgClass: "bg-emerald-100 dark:bg-emerald-500/20",
      action: "Invest Difference",
      progress: 88, // 100 - 12
      progressColor: "bg-emerald-500"
    },
    {
      id: 3,
      title: "Unusual Activity anomaly",
      description: "There is a ₹210 charge for Utilities which is 40% higher than your usual ₹150.",
      icon: AlertCircle,
      color: "text-rose-600 dark:text-rose-500",
      bgClass: "bg-rose-100 dark:bg-rose-500/20",
      action: "Verify Charge",
      progress: 140, // percentage over norm
      progressColor: "bg-rose-500"
    },
    {
      id: 4,
      title: "Goal Projection",
      description: "You are on track to save ₹1,000 this month. Keep it up!",
      icon: Sparkles,
      color: "text-blue-600 dark:text-blue-500",
      bgClass: "bg-blue-100 dark:bg-blue-500/20",
      action: "Boost Deposit",
      progress: 85, // track progression
      progressColor: "bg-blue-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {insights.map((insight) => (
        <div key={insight.id} className="group bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 relative overflow-hidden">

          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className={`p-4 rounded-2xl ${insight.bgClass} ${insight.color} transition-transform group-hover:scale-105`}>
                <insight.icon size={26} className="stroke-[1.5px]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{insight.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                {insight.description}
              </p>
            </div>
          </div>

          <div className="mt-2 pt-4 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
            {/* Mini visual indicator */}
            <div className="flex-1 mr-8">
              <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${insight.progressColor} rounded-full`}
                  style={{ width: `${Math.min(insight.progress, 100)}%` }}
                />
              </div>
            </div>

            <button className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {insight.action}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
