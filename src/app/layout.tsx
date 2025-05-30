import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";
import LoadingScreen from "@/components/loadingScreen";

export const metadata: Metadata = {
  title: {
    default: "Jason Dagana",
    template: "%s | Jason Dagana",
  },
  description: "Portfolio of Jason Dagana, a passionate full-stack developer.",
  keywords: ["Full-stack developer", "Next.js", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Jason Dagana" }],
  openGraph: {
    title: "Jason's Portfolio",
    description:
      "Portfolio of Jason Dagana, built with Next.js and Tailwind CSS.",
    url: "https://yourdomain.com",
    siteName: "Jason's Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jason's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
   

  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${GeistSans.className} relative`}>
        <div
          className="inset-0"
          style={{
            backgroundImage: "url('/diagmonds-light.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            position: "fixed",
            zIndex: "-50",
            width: "100%",
            height: '100vh'
          }}
        />
        <div className="fixed inset-0 w-full h-screen -z-30 bg-black bg-opacity-95" />
          
        <LoadingScreen>
          {children}
        </LoadingScreen>

       
      </body>
    </html>
  );
}
