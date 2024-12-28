import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/Morabba-UltraLight.woff2",
      weight: "200",
    },
    {
      path: "../../public/fonts/Morabba-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Morabba-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Morabba-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Morabba-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Morabba-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Morabba-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../../public/fonts/Morabba_Black.woff2",
      weight: "900",
    },
  ],
  style: "normal",
  display: "swap",
});

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl">
      <body
        className={`min-h-screen grid grid-rows-[80px_1fr_auto]
      text-gray-500  ${myFont.className}`}
      >
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
