import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Ismail El Abbassi - Portfolio",
  description: "Fullstack software engineer. Projects, craft and path.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
