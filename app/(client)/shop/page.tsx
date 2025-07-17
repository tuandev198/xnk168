// app/shop/page.tsx

import Shop from "@/components/Shop";
import { Suspense } from "react";
import type { Metadata } from "next";

// --- SEO chuẩn cho trang Shop ---
export const metadata: Metadata = {
  title: "Cửa hàng | Công Ty Xuất Nhập Khẩu 628",
  description:
    "Khám phá các sản phẩm chất lượng từ Công Ty TNHH 628: hàng khô, đông lạnh, đồ gia dụng, thực phẩm chay và nhiều hơn nữa.",
  keywords:
    "cửa hàng, hàng khô, đông lạnh, thực phẩm chay, nông sản, gia dụng, Công Ty Xuất Nhập Khẩu 628",
  openGraph: {
    title: "Cửa hàng | Công Ty Xuất Nhập Khẩu 628",
    description:
      "Chuyên cung cấp các sản phẩm xuất khẩu chất lượng cao đến từ Việt Nam: hàng khô, đông lạnh, đồ chay và gia dụng.",
    url: "https://xuatnhapkhau628.com/shop",
    type: "website",
    siteName: "Công Ty Xuất Nhập Khẩu 628",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cửa hàng | Công Ty Xuất Nhập Khẩu 628",
    description:
      "Xem ngay các sản phẩm chất lượng cao của Công Ty TNHH 628. Đa dạng ngành hàng và đảm bảo uy tín.",
  },
};

const ShopPage = async () => {
  return (
    <div className="bg-white">
      <Suspense fallback={<div>Loading...</div>}>
        <Shop />
      </Suspense>
    </div>
  );
};

export default ShopPage;
