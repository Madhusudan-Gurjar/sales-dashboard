// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sales Dashboard",
  description: "Sales analytics and visualization",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark"> {/* <- Force dark mode */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
