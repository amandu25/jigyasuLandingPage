import "./globals.css";
import { Raleway } from "next/font/google";

const poppins = Raleway({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Jigyasu",
  description: "Learning by doing",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.className}`}>
      <body>{children}</body>
    </html>
  );
}
