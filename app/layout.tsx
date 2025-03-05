import type { Metadata } from "next";
import "./globals.css";
import AppSidebar from "@/components/sidebar";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Ergonize",
  description: "Job application tracking made easy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main className="flex w-screen flex-col">
            <Header />
            <div className="flex items-start">
              <SidebarTrigger />
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
