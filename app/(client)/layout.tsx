import type { Metadata } from "next";
import Headers from "@/components/Headers";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s - Xuatnhapkhau628.com",
    default: "Xuatnhapkhau628.com",
  },
  description: "Xuatnhapkhau628.com, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <Headers />
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </ClerkProvider>
  );
}
