import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { FloatingNav } from "@/components/ui/floatingNavbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karan Portfolio",
  description: "Developer Portfolio",
};

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Profiles",
    link: "#coding-profile",
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          minHeight: "100vh",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="font-semibold text-nowrap">
            <FloatingNav navItems={navItems} />
          </div>
          <div className = "absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 ">
          {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
