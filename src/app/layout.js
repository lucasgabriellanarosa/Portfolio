import "./globals.css";
import localFont from "next/font/local";


const agbalumo = localFont({
  src: "./fonts/Agbalumo.ttf",
  variable: "--font-agbalumo",
  weight: "100 900",
});

const fasterOne = localFont({
  src: "./fonts/FasterOne.ttf",
  variable: "--font-fasterOne",
  weight: "100 900",
});

const openSans = localFont({
  src: "./fonts/OpenSans.ttf",
  variable: "--font-openSans",
  weight: "100 900",
});

export const metadata = {
  title: "Lucas Rosa",
  description: "I am a web developer! My main technologies are: Next.js, React, Django and Tailwind CSS!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${agbalumo.variable} ${fasterOne.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
