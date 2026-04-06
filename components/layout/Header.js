"use client";

import { useState } from "react";
import { useRole } from "@/context/RoleContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Shield, User, Bell, LayoutDashboard, ArrowRightLeft, PieChart, Wallet, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Transactions", href: "/transactions", icon: ArrowRightLeft },
  { name: "Insights", href: "/insights", icon: PieChart },
];

export function Header() {
  const { role, toggleRole } = useRole();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="h-16 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 md:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-zinc-900 dark:text-white font-semibold text-lg">
              <div className="bg-blue-600 p-1.5 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="hidden sm:inline">TrackBank</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
                    )}
                  >
                    <item.icon className={cn("w-4 h-4", isActive ? "text-blue-600 dark:text-blue-500" : "text-zinc-400")} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-1"></div>

              <ThemeToggle />

              <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-1"></div>

              {/* Role Switcher */}
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 p-1 rounded-lg">
                <button
                  onClick={() => role !== "admin" && toggleRole()}
                  className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all ${role === "admin"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                    }`}
                >
                  <Shield size={16} />
                  Admin
                </button>
                <button
                  onClick={() => role !== "viewer" && toggleRole()}
                  className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all ${role === "viewer"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                    }`}
                >
                  <User size={16} />
                  Viewer
                </button>
              </div>
            </div>

            <div className="ml-0 md:ml-2 w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold border border-blue-200 dark:border-blue-800 shrink-0">
              User
            </div>

            <button
              className="md:hidden p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors relative z-50"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative z-10 w-72 max-w-[80vw] h-full bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 flex flex-col p-6 animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-semibold text-lg">
                <div className="bg-blue-600 p-1.5 rounded-lg flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <span>FinDash</span>
              </div>
              <button
                className="p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 flex-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
                    )}
                  >
                    <item.icon className={cn("w-5 h-5", isActive ? "text-blue-600 dark:text-blue-500" : "text-zinc-400")} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-6 mt-auto">
              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Theme</p>
                <ThemeToggle />
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Account Role</p>
                <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 p-1 rounded-lg w-full">
                  <button
                    onClick={() => {
                      if (role !== "admin") toggleRole();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center flex-1 gap-2 px-3 py-2 text-xs font-medium rounded-md transition-all ${role === "admin"
                      ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                      }`}
                  >
                    <Shield size={14} /> Admin
                  </button>
                  <button
                    onClick={() => {
                      if (role !== "viewer") toggleRole();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center flex-1 gap-2 px-3 py-2 text-xs font-medium rounded-md transition-all ${role === "viewer"
                      ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                      }`}
                  >
                    <User size={14} /> Viewer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
