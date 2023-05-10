import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keith Brown DDS FAGD",
  description:
    "Keith Brown is a dentist serving Naperville, Auroura and the greater Chicagoland area.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
