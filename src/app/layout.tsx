import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { FloatingNav } from "@/components/ui/floatingNavbar";
const inter = Inter({ subsets: ["latin"] });
import { IconHome, IconMessage, IconUser, IconSchool, IconBriefcase, IconBrandGithub } from "@tabler/icons-react";
export const metadata: Metadata = {
  title: "Karan Portfolio",
  description: "Developer Portfolio",
};

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconBriefcase className="h-6 w-6 text-neutral-500 dark:text-white" />,
    
  },
  {
    name: "Contact",
    link: "#contact",
    icon: (
      <IconMessage className="h-6 w-6 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconBrandGithub className="h-6 w-6 text-neutral-500 dark:text-white" />
  },
  {
    name: "Profiles",
    link: "#coding-profile",
    icon: <IconUser className="h-6 w-6 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Education",
    link: "#education",
    icon: <IconSchool className="h-6 w-6 text-neutral-500 dark:text-white" />,
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
