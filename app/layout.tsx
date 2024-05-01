import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://touati-kamel-v2.vercel.app/"), //CHANGE

  title: "Touati Kamel",
  authors: {
    name: "Touati Kamel",
  },

  description:
    "I'm a full-stack developer, currently studying Computer Engineering at the University of Waterloo.",
  openGraph: {
    title: "Touati Kamel",
    description:
      "I'm a full-stack developer, currently studying Computer Engineering at ESTIN",
    url: "https://touati-kamel-v2.vercel.app/", //CHANGE
    siteName: "Touati Kamel",
    images: "/og.png", //CHANGE
    type: "website",
  },
  keywords: ["personal portfolio", "Touati Kamel"],
};

export default function RootLayout({ children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
