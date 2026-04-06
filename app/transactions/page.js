"use client";

import { TransactionTable } from "@/components/transactions/TransactionTable";
import { Send, ArrowDownToLine, Plus, FileText } from "lucide-react";
import { useRole } from "@/context/RoleContext";

export default function TransactionsPage() {
  const { isAdmin } = useRole();

  const quickActions = [
    { name: "Send Money", icon: Send, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-500/20" },
    { name: "Request Funds", icon: ArrowDownToLine, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-500/20" },
    { name: "Top Up", icon: Plus, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-100 dark:bg-indigo-500/20" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Transactions</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">View and manage all your historical financial records.</p>
        </div>

        {isAdmin && (
          <button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 rounded-xl font-medium transition-colors shadow-sm w-fit">
            <FileText size={18} />
            Generate Report
          </button>
        )}
      </div>

      {isAdmin && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.name}
              className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group"
            >
              <div className={`p-3 rounded-full ${action.bg} ${action.color} group-hover:scale-110 transition-transform`}>
                <action.icon size={20} />
              </div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                {action.name}
              </span>
            </button>
          ))}

          <div className="hidden md:flex flex-col items-center justify-center p-4 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 text-zinc-500 cursor-not-allowed">
            <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-3 opacity-50">
              <Plus size={20} />
            </div>
            <span className="text-sm font-medium opacity-50">Add Shortcut</span>
          </div>
        </div>
      )}

      <TransactionTable />
    </div>
  );
}
