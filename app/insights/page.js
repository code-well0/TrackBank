import { InsightsCards } from "@/components/dashboard/InsightsCards";
import { HealthScore } from "@/components/dashboard/HealthScore";
export default function InsightsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">AI Insights</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">Personalized analytics and recommendations based on your spending habits.</p>
      </div>

      <HealthScore />
      
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Actionable Insights</h2>
        <InsightsCards />
      </div>
    </div>
  );
}
