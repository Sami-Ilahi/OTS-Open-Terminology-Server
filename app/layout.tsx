import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components";

import { GlobalContextProvider } from './context/store';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Search",
  description: "This web application allows users to perform live searches on a server and provides various filtering, sorting, and display options. The app is responsive and user-friendly, making it suitable for a wide range of screen sizes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
