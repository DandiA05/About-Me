import { Poppins } from "next/font/google";
import "./globals.css";
import AOSSetup from "@/components/AOSSetup";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Dandi Anto | Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Dandi Anto, a Frontend Developer specializing in building modern web applications. Check out my projects, skills, and experience.",
  keywords: [
    "Dandi Anto",
    "Portfolio",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "Dandi Anto Vercel",
  ],
  authors: [{ name: "Dandi Anto" }],
  creator: "Dandi Anto",
  publisher: "Dandi Anto",
  metadataBase: new URL("https://dandi-anto-portofolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dandi Anto | Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Dandi Anto, a Frontend Developer specializing in building modern web applications.",
    url: "https://dandi-anto-portofolio.vercel.app",
    siteName: "Dandi Anto Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 800,
        height: 600,
        alt: "Dandi Anto",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dandi Anto | Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Dandi Anto, a Frontend Developer specializing in building modern web applications.",
    images: ["/assets/profile.jpg"],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AOSSetup />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dandi Anto",
              url: "https://dandi-anto-portofolio.vercel.app",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://www.instagram.com/dandi_05/",
                "https://www.linkedin.com/in/dandi-anto/",
                "https://github.com/DandiA05",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Dandi Anto Portfolio",
              url: "https://dandi-anto-portofolio.vercel.app",
            }),
          }}
        />
      </body>
    </html>
  );
}
