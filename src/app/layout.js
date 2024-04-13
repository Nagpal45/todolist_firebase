
import { Inter } from "next/font/google";
import './globals.css'
import Navbar from "@/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todoist | To-Do List",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <div className="container">
        {children}
      </div>
      </body>
    </html>
  );
}
