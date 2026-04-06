import Link from "next/link";
import { Mail, Send, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-500 mb-4">
              FinDash
            </h2>
            <p className="text-sm mb-6 leading-relaxed">
              Your ultimate companion for managing your finances. Plan smarter, track better.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.1-.3 6.3-1.5 6.3-6.9 0-1.4-.5-2.6-1.3-3.6.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C7.3 1.5 6.3 1.8 6.3 1.8c-.8 1.8-.3 3.2-.1 3.5-.8 1-1.3 2.2-1.3 3.6 0 5.4 3.2 6.6 6.3 6.9A4.8 4.8 0 0 0 10 18v4"/><path d="M10 22H9.5A3.5 3.5 0 0 1 6 18.5V18"/></svg>
              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Dashboard</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Transactions</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">AI Insights</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Expense Tracker</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Features Column */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="text-lg">📊</span> <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Analytics</Link></li>
              <li className="flex items-center gap-2"><span className="text-lg">🤖</span> <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">AI Assistant</Link></li>
              <li className="flex items-center gap-2"><span className="text-lg">💳</span> <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Card Management</Link></li>
              <li className="flex items-center gap-2"><span className="text-lg">📈</span> <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Investments</Link></li>
              <li className="flex items-center gap-2"><span className="text-lg">🎯</span> <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Goals</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Stay Updated Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to get the latest finance tips and updates.
            </p>
            <div className="flex bg-zinc-100 dark:bg-zinc-900 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-2 text-sm outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 transition-colors flex items-center justify-center">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 relative text-sm">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© 2026 FinDash. All rights reserved.</p>
            <p className="font-medium text-zinc-900 dark:text-zinc-100 mt-1 md:mt-0">made with ❤️ by shubrali</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Sitemap</Link>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Accessibility</Link>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Cookie Policy</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors absolute right-0 -top-5 md:top-1/2 md:-translate-y-1/2 md:relative shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
