import localFont from "next/font/local";
import styles from "./styles.css";
import { Analytics } from "@vercel/analytics/react"

const fingerPaint = localFont({
  src: "./fonts/FingerPaint.ttf",
  variable: "--font-fingerPaint",
  weight: "100 900",
});

const imprima = localFont({
  src: "./fonts/Imprima.ttf",
  variable: "--font-imprima",
  weight: "100 900",
});

const inknutAntiqua = localFont({
  src: "./fonts/InknutAntiqua.ttf",
  variable: "--font-inknutAntiqua",
  weight: "100 900",
});

export const metadata = {
  title: "Lucas Gabriel",
  description: "Lucas Gabriel de Lana Rosa - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fingerPaint.variable} ${imprima.variable} ${inknutAntiqua.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
