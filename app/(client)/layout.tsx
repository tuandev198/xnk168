"use client";  // Thêm dòng này

import { ClerkProvider } from "@clerk/nextjs";
import { LanguageProvider } from "../../context/LanguageContext";
import Headers from "@/components/Headers";
import Navbar from "@/components/Navbar";

// app/layout.tsx




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen">
          <Headers />
          <Navbar />
          <MainContent>{children}</MainContent>
        </div>
      </LanguageProvider>
    </ClerkProvider>
  );
}

// Tạo thêm một component con để dùng `useLanguage` bên trong phạm vi của `LanguageProvider`
const MainContent = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <>
      <main className="flex-1">{children}</main>
    </>
  );
};
