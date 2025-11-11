import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "Learning Next Js",
    template: "%s | Learning Next Js",
  },
  keywords: ['Next.js', 'React', 'JavaScript', 'Learning'],
  description: "Learning Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="light" >
      <NextAuthSessionProvider>
        <body
          className={`${poppins.className} antialiased`}
        >
          <NavBar></NavBar>
          <div className="min-h-[400px] container mx-auto mt-10">
            {children}
          </div>
          <Footer></Footer>
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
