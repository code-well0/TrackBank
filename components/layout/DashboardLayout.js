"use client";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RoleProvider } from "@/context/RoleContext";
import { ThemeProvider } from "next-themes";

export function DashboardLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RoleProvider>
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 flex flex-col transition-colors">
          <Header />
          <main className="flex-1 p-6 md:p-8">
              <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 fill-mode-both">
                {children}
              </div>
            </main>
            <Footer />
        </div>
      </RoleProvider>
    </ThemeProvider>
  );
}
