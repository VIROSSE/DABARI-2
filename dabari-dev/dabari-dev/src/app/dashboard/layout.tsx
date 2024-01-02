import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../fonts.css";
import { Toaster } from "react-hot-toast";
import Sidebar from "../components/dashboard/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dabari",
  description: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="w-screen h-screen overflow-hidden bg-white">
          <div className="w-full h-full flex flex-col md:flex-row items-stretch justify-between">
            <Sidebar />
            <div className="flex-1 overflow-hidden">
              <div className="w-full h-full overflow-y-auto py-[1rem]">
                <div className="w-full px-[1rem] md:px-[3rem] md:py-[2rem]">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
