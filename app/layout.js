import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Визуал ВКонтакте | Aurora Collective",
  description: "Современный визуальный стиль для сообщества ВКонтакте Aurora Collective."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={rubik.className}>
      <body>{children}</body>
    </html>
  );
}
