import { Poppins } from "next/font/google";
import "./globals.css";
import AOSSetup from "@/components/AOSSetup";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Dandi | Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AOSSetup />
        {children}
      </body>
    </html>
  );
}
