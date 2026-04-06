"use client";

import { useState, useMemo, Fragment } from "react";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Search, ArrowUpDown, ChevronDown, Download, Plus, ReceiptText, Building2, CheckCircle2 } from "lucide-react";
import { MOCK_TRANSACTIONS } from "@/data/mockData";
import { useRole } from "@/context/RoleContext";

const CATEGORY_COLORS = {
  "Salary": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
  "Freelance": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
  "Housing": "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",
  "Utilities": "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20",
  "Groceries": "bg-lime-100 text-lime-700 dark:bg-lime-500/10 dark:text-lime-400 border-lime-200 dark:border-lime-500/20",
  "Dining": "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 border-orange-200 dark:border-orange-500/20",
  "Transport": "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200 dark:border-amber-500/20",
  "Entertainment": "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border-purple-200 dark:border-purple-500/20",
  "Shopping": "bg-pink-100 text-pink-700 dark:bg-pink-500/10 dark:text-pink-400 border-pink-200 dark:border-pink-500/20",
  "Default": "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
};

export function TransactionTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
  const [expandedRowId, setExpandedRowId] = useState(null);

  const { isAdmin } = useRole();

  const handleSort = (key) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === "desc" ? "asc" : "desc"
    }));
  };

  const filteredAndSortedTransactions = useMemo(() => {
    let result = MOCK_TRANSACTIONS.filter((tx) => {
      const matchesSearch =
        tx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = filterType === "all" || tx.type === filterType;

      return matchesSearch && matchesType;
    });

    result.sort((a, b) => {
      if (sortConfig.key === "date") {
        return sortConfig.direction === "desc"
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortConfig.key === "amount") {
        return sortConfig.direction === "desc"
          ? Math.abs(b.amount) - Math.abs(a.amount)
          : Math.abs(a.amount) - Math.abs(b.amount);
      }
      return 0;
    });

    return result;
  }, [searchTerm, filterType, sortConfig]);

  const toggleRow = (id) => {
    setExpandedRowId(current => current === id ? null : id);
  };

  return (
    <div className="bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
      {/* Controls */}
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none pr-8 cursor-pointer relative"
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button className="p-2.5 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors tooltip-trigger" aria-label="Export CSV">
            <Download className="w-4 h-4" />
          </button>

          {isAdmin && (
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add New</span>
            </button>
          )}
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400">
            <tr>
              <th
                className="px-6 py-4 font-medium flex items-center gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-200 select-none transition-colors"
                onClick={() => handleSort("date")}
              >
                Date
                <ArrowUpDown className={`w-3.5 h-3.5 ${sortConfig.key === 'date' ? 'text-blue-500' : 'opacity-50'}`} />
              </th>
              <th className="px-6 py-4 font-medium">Description</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th
                className="px-6 py-4 font-medium text-right flex items-center justify-end gap-1 cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-200 select-none transition-colors"
                onClick={() => handleSort("amount")}
              >
                Amount
                <ArrowUpDown className={`w-3.5 h-3.5 ${sortConfig.key === 'amount' ? 'text-blue-500' : 'opacity-50'}`} />
              </th>
              <th className="px-6 py-4">
                {/* Caret column */}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/50">
            {filteredAndSortedTransactions.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center text-zinc-500 dark:text-zinc-400">
                  <div className="flex flex-col items-center justify-center">
                    <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-full mb-4">
                      <Search className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />
                    </div>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">No transactions found</p>
                    <p className="text-sm">Try adjusting your search or filters.</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredAndSortedTransactions.map((tx) => (
                <Fragment key={tx.id}>
                  <tr
                    onClick={() => toggleRow(tx.id)}
                    className={`group cursor-pointer transition-colors ${expandedRowId === tx.id
                      ? "bg-blue-50/50 dark:bg-blue-500/5"
                      : "hover:bg-zinc-50/80 dark:hover:bg-zinc-900/30"
                      }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-400 font-medium">
                      {formatDate(tx.date)}
                    </td>
                    <td className="px-6 py-4 text-zinc-900 dark:text-zinc-100 font-semibold">
                      {tx.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${CATEGORY_COLORS[tx.category] || CATEGORY_COLORS["Default"]}`}>
                        {tx.category}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-right font-bold ${tx.type === "income"
                      ? "text-emerald-600 dark:text-emerald-500"
                      : "text-zinc-900 dark:text-zinc-100"
                      }`}>
                      {tx.type === "income" ? "+" : ""}{formatCurrency(tx.amount)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${expandedRowId === tx.id ? "rotate-180" : ""}`} />
                    </td>
                  </tr>

                  {expandedRowId === tx.id && (
                    <tr className="bg-zinc-50/50 dark:bg-zinc-900/20 border-b-0">
                      <td colSpan={5} className="px-6 py-6 border-b border-zinc-200 dark:border-zinc-800">
                        <div className="flex flex-col md:flex-row gap-8 animate-in slide-in-from-top-2 fade-in duration-200">

                          <div className="flex-1 space-y-4">
                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">Transaction Details</h4>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                              <div>
                                <p className="text-zinc-500 dark:text-zinc-400 mb-1">Status</p>
                                <p className="font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"><CheckCircle2 size={14} /> Completed</p>
                              </div>
                              <div>
                                <p className="text-zinc-500 dark:text-zinc-400 mb-1">Transaction ID</p>
                                <p className="font-medium text-zinc-900 dark:text-zinc-100 font-mono text-xs">TXN-{tx.id.padStart(6, '0')}-99</p>
                              </div>
                              <div>
                                <p className="text-zinc-500 dark:text-zinc-400 mb-1">Payment Method</p>
                                <p className="font-medium text-zinc-900 dark:text-zinc-100">Visa ending in •••• 4242</p>
                              </div>
                              <div>
                                <p className="text-zinc-500 dark:text-zinc-400 mb-1">Merchant</p>
                                <p className="font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5"><Building2 size={14} className="text-zinc-400" /> {tx.category} Vendor</p>
                              </div>
                            </div>
                          </div>

                          <div className="hidden md:flex w-px bg-zinc-200 dark:bg-zinc-800" />

                          <div className="md:w-64 flex flex-col justify-center gap-3">
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 rounded-lg text-sm font-medium text-zinc-900 dark:text-zinc-100 transition-colors shadow-sm">
                              <ReceiptText size={16} />
                              View Receipt
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors">
                              Report Issue
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
