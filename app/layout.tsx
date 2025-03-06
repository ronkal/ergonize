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
            <div className="flex flex-1 gap-1 overflow-auto p-1">
              <SidebarTrigger className="h-full" />
              <div className="border-border h-full w-full rounded border">
                {children}
              </div>
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
