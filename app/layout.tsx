import type { Metadata } from "next";
import "./globals.css";
import AppSidebar from "@/components/sidebar";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";

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
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col">
            <div className="flex items-start">
              <SidebarTrigger className="mr-4" />
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
