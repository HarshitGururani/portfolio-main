import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "../contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Harshit Gururani",
  description:
    "Harshit Gururani's Portfolio - Full Stack Developer specializing in React, Node.js, and modern web technologies",
  keywords: [
    "portfolio",
    "developer",
    "full stack",
    "react",
    "node.js",
    "typescript",
  ],
  authors: [{ name: "Harshit Gururani" }],
  creator: "Harshit Gururani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Replace with your actual domain
    title: "Harshit Gururani - Full Stack Developer",
    description:
      "Harshit Gururani's Portfolio - Full Stack Developer specializing in React, Node.js, and modern web technologies",
    siteName: "Harshit Gururani Portfolio",
    images: [
      {
        url: "/twittercard.png", // This should be your Twitter card image
        width: 1200,
        height: 630,
        alt: "Harshit Gururani - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Gururani - Full Stack Developer",
    description:
      "Harshit Gururani's Portfolio - Full Stack Developer specializing in React, Node.js, and modern web technologies",
    images: ["/twittercard.png"], // This should be your Twitter card image
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'light';
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={twMerge(
          "bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased font-sans transition-colors duration-300",
          inter.variable,
          calistoga.variable,
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
