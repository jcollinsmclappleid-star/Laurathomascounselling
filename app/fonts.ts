import localFont from "next/font/local";

export const cormorantGaramond = localFont({
  src: [
    {
      path: "./fonts/cormorant-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-italic-400.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif-display",
  display: "swap",
});

export const interLocal = localFont({
  src: [
    {
      path: "./fonts/inter-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/inter-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/inter-600.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
