# TrackBank 🚀

> "Track your spending, be your own banking"

TrackBank is a modern, full-stack personal finance and banking dashboard. Designed with a premium fintech aesthetic, it allows users to keep close tabs on their financial activities, monitor spending trends, and take full control of their economic profiles from a unified, intuitive interface.

## ✨ Features

- **📊 Comprehensive Dashboard overview**: Get an instant summary of your Total Balance, Monthly Income, and Expenses, complete with trend indicators.
- **📈 Interactive Financial Charts**: Beautiful, responsive visualizations plotting your balance history and categorizing your spending, powered by Recharts.
- **💸 Transaction Management**: A robust transaction table providing a detailed breakdown of all your recent financial activity.
- **💡 Smart Insights & Health Score**: Built-in insights section and financial health score meter to help guide your financial decisions.
- **🌓 Dark Mode**: Seamlessly switch between a custom light mode (Cream) and a stylish dark mode (Dark Teal and Lime) via `next-themes`.
- **🔐 Role-Based Views**: Context-driven UI scaling based on user roles (`Admin` or `Viewer`).
- **📱 Fully Responsive**: Highly optimized layout ensuring a perfect experience on mobile phones, tablets, and wide-screen desktop displays.

## 🛠️ Tech Stack

This project is built using cutting-edge tools to ensure blazing-fast performance and a highly maintainable codebase:

- **Framework**: [Next.js](https://nextjs.org/) (Version 16, utilizing the App Router)
- **UI Library**: [React](https://reactjs.org/) (Version 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) — customized with a unique fintech palette.
- **Charting**: [Recharts](https://recharts.org/) — for flexible, declarative visualizations.
- **Icons**: [Lucide React](https://lucide.dev/) — clean and consistent SVG icons.
- **Utilities**: `tailwind-merge` and `clsx` for intelligent CSS class merging.
- **Theming**: `next-themes` for effortless dark/light mode toggling.

## 🚀 Getting Started

First, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/code-well0/TrackBank.git
   cd TrackBank
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Theme & Brand Palette
The project uses a custom override on standard Tailwind colors injected via `app/globals.css`. 
- **Light Theme**: Cream (`#F9F7F2`) Backgrounds, Teal (`#0B4650`) Accents
- **Dark Theme**: Deep Teal (`#062a30`) Backgrounds, Lime (`#E6FF2B`) Highlights

## 📂 Project Structure Overview
- `app/` - Next.js App Router root, pages (`/transactions`, `/insights`), and global CSS config.
- `components/` - React components divided logically by feature (`dashboard/`, `layout/`, `transactions/`, `ui/`).
- `context/` - Global state providers such as `RoleContext.js`.
- `data/` - Mock data files seeding the initial interface.
- `lib/` - Utility functions such as class mergers and currency formatters.
