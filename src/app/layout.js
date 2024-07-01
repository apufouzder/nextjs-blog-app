import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });

export const metadata = {
  title: "Next Blog App",
  description: "Make a next js blog application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
