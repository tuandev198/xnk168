// app/layout.tsx
import RootLayout from "@/components/RootLayout";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
    title: {
        default: "Personal Blog - A feature to make you famous",
        template: "%s | Personal Blog",
    },
    description: "Welcome to my personal blog, where thoughts become fame.",
};

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html
            lang="en"
            className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
        >
        <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        </body>
        </html>
    );
}
