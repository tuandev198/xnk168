// app/layout.tsx
import RootLayout from "@/components/RootLayout";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: {
    default: "Logistics Cá Khô & Ớt Khô - Xuất Nhập Khẩu Thực Tế",
    template: "%s | Logistics Cá Khô & Ớt Khô",
  },
  description:
    "Blog chuyên sâu về logistics, xuất nhập khẩu cá khô, ớt khô, nông sản khô. Chia sẻ kinh nghiệm thực tế, quy trình hải quan, đóng gói, vận chuyển và thị trường quốc tế.",
  keywords: [
    "logistics xuất khẩu",
    "xuất khẩu cá khô",
    "xuất khẩu ớt khô",
    "quy trình hải quan hàng khô",
    "HS code cá khô",
    "HS code ớt khô",
    "đóng gói hàng khô",
    "logistics nông sản khô",
    "bảo quản hàng khô xuất khẩu",
    "vận chuyển container hàng khô",
    "xuất khẩu hàng khô sang EU",
    "xuất khẩu sang UAE",
    "blog logistics thực tế",
  ],
  authors: [{ name: "xuatnhapkhau628", url: "https://www.xuatnhapkhau628.com" }],
  creator: "Trọng Tuấn Nguyễn",
  metadataBase: new URL("https://www.xuatnhapkhau628.com" ), // thay bằng domain thực tế
  openGraph: {
    title: "Logistics Cá Khô & Ớt Khô - Blog Xuất Nhập Khẩu Thực Tế",
    description:
      "Tìm hiểu sâu về chuỗi cung ứng, logistics quốc tế, kinh nghiệm xuất khẩu cá khô, ớt khô từ Việt Nam ra thế giới.",
    url: "https://www.xuatnhapkhau628.com",
    siteName: "Blog Logistics Cá Khô & Ớt Khô",
    images: [
      {
        url: "/image/og-image.jpg", // ảnh preview khi chia sẻ
        width: 1200,
        height: 630,
        alt: "Blog về xuất khẩu cá khô, ớt khô",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
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
