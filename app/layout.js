import Navbar from "@/components/Navbar";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Inter } from "next/font/google";
require('dotenv').config();


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List",
  description: "Online todo list app to track your tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-gradient-to-t from-[#242444] to-[#173c94] min-h-[120vh]">
      <body className={inter.className}>
      <NextTopLoader
          color="#0000FF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />

        <div className="max-w-3xl mx-auto p-4 bg-gradient-to-bl from-[#feffff] to-[#dbf8fe] shadow-xl m-5 rounded-lg ">

          <Navbar />

          <div className="mt-8">

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
