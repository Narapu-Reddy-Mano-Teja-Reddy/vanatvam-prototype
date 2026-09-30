import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vanatvam | Sustainable Managed Farmland & Nature Communities",
    template: "%s | Vanatvam"
  },
  description: "Vanatvam creates sustainable managed farmland, native forest ecosystems, and nature communities across Karnataka & near Bangalore.",
  keywords: ["Managed Farmland Bangalore", "Sustainable Farmland Karnataka", "Farm Plots Near Bangalore", "Agricultural Land Investment", "Eco Friendly Farm Communities", "Nakshatra Vana Forest"],
  authors: [{ name: "Vanatvam Private Limited" }],
  openGraph: {
    title: "Vanatvam | Sustainable Managed Farmland",
    description: "Experience living ecosystems with Vanatvam's sustainable managed farmlands in Karnataka.",
    url: "https://www.vanatvam.com",
    siteName: "Vanatvam",
    images: [
      {
        url: "/assets/images/about_hero_bg.webp",
        width: 1200,
        height: 630,
        alt: "Vanatvam Nature Communities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Vanatvam | Sustainable Managed Farmland",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
