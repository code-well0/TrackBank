export const MOCK_TRANSACTIONS = [
  { id: "1", date: "2024-03-01", amount: 120000.00, category: "Salary", type: "income", description: "Monthly Salary" },
  { id: "2", date: "2024-03-02", amount: -4500.50, category: "Groceries", type: "expense", description: "Whole Foods" },
  { id: "3", date: "2024-03-05", amount: -3000.99, category: "Entertainment", type: "expense", description: "Netflix Subscription" },
  { id: "4", date: "2024-03-08", amount: -6000.00, category: "Transport", type: "expense", description: "Gas Station" },
  { id: "5", date: "2024-03-12", amount: 150000.00, category: "Freelance", type: "income", description: "Design Project" },
  { id: "6", date: "2024-03-15", amount: -800.00, category: "Utilities", type: "expense", description: "Electricity Bill" },
  { id: "7", date: "2024-03-18", amount: -2000.00, category: "Groceries", type: "expense", description: "Trader Joe's" },
  { id: "8", date: "2024-03-20", amount: -15000.00, category: "Housing", type: "expense", description: "Rent Payment" },
  { id: "9", date: "2024-03-22", amount: -4000.00, category: "Dining", type: "expense", description: "Dinner with friends" },
  { id: "10", date: "2024-03-28", amount: -1200.00, category: "Shopping", type: "expense", description: "New shoes" }
];

export const MOCK_BALANCE_DATA = [
  { name: "Mar 1", balance: 5000 },
  { name: "Mar 5", balance: 6187 },
  { name: "Mar 10", balance: 6107 },
  { name: "Mar 15", balance: 6047 },
  { name: "Mar 20", balance: 4547 },
  { name: "Mar 25", balance: 4507 },
  { name: "Mar 30", balance: 4387 }
];

export const MOCK_SPENDING_DATA = [
  { name: "Housing", value: 15000, color: "#3b82f6" },     // blue-500
  { name: "Groceries", value: 1500.50, color: "#10b981" }, // emerald-500
  { name: "Auto & Transport", value: 1200, color: "#f59e0b" }, // amber-500
  { name: "Entertainment", value: 1500.99, color: "#8b5cf6" }, // violet-500
  { name: "Shopping", value: 2000, color: "#ec4899" },     // pink-500
  { name: "Utilities", value: 1900, color: "#64748b" }     // slate-500
];
