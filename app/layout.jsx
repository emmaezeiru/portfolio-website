import { NTR, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const ntr = NTR({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ntr",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://emmaezeiru.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Emma Ezeiru — Backend Engineer | Microservices & Distributed Systems",
    template: "%s | Emma Ezeiru",
  },
  description:
    "Backend engineer specializing in NestJS microservices, API gateways, PostgreSQL, Redis, and Kafka. Open to remote backend and fintech roles worldwide.",
  keywords: [
    "Backend Engineer",
    "Node.js Developer",
    "NestJS Developer",
    "Java Developer",
    "Microservices",
    "API Gateway",
    "PostgreSQL",
    "Kafka",
    "Remote Backend Developer",
    "Fintech Engineer",
    "Distributed Systems",
    "Software Engineer Nigeria",
    "Express.js",
    "Spring Boot",
  ],
  authors: [{ name: "Ezeiru Elias Chukwubuikem Emma" }],
  creator: "Emma Ezeiru",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Emma Ezeiru Portfolio",
    title: "Emma Ezeiru — Backend Software Engineer Building Scalable APIs",
    description:
      "Microservices, API gateways, and event-driven backends. Remote-ready backend engineer open to international roles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emma Ezeiru — Backend Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emma Ezeiru — Backend Software Engineer",
    description:
      "NestJS · Springboot · PostgreSQL · Microservices · Kafka. Open to remote backend roles.",
    creator: "@emmaezeiru",
  },
  robots: {
    index: true,
    follow: true,
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${ntr.variable} ${geistMono.variable} min-h-screen font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="dark">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
//       >
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }
