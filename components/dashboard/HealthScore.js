"use client";

import { Activity } from "lucide-react";

export function HealthScore() {
  const score = 85;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex-1 space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm border border-blue-100 dark:border-blue-500/20">
          <Activity size={16} />
          Financial Health
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
          You&apos;re in great shape!
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl">
          Your financial score is excellent. You&apos;ve maintained consistent savings and kept your credit utilization low. Keep this momentum going.
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center shrink-0">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Track */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              className="text-zinc-100 dark:text-zinc-800"
            />
            {/* Progress */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="text-blue-500" stopColor="currentColor" />
                <stop offset="100%" className="text-emerald-400" stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter">
              {score}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Score
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
