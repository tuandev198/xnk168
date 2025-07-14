"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { locale, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = locale === "vi" ? "en" : "vi";
    changeLanguage(newLang);
  };

  return (
    <header className="bg-[#0648ff] text-white text-[10px] md:text-sm">
      <div className="flex flex-col md:flex-row md:justify-between items-center px-2 py-1 md:px-4 md:py-2 gap-1">
        {/* Ẩn ở mobile, chỉ hiển thị từ md trở lên */}
        <div className="hidden md:flex items-center gap-2">
          <span className="whitespace-nowrap">📧 CONTACT</span>
          <FaPhoneAlt className="text-xs" />
          <span className="whitespace-nowrap">+84 901366488 (Quang)</span>
        </div>

        {/* Menu: luôn nằm 1 dòng, không scroll, không xuống dòng */}
        <div className="flex flex-nowrap justify-center gap-[6px]">
          <Link
            href="/blog"
            className="px-[6px] py-[2px] whitespace-nowrap hover:underline border-r border-white"
          >
            {locale === "vi" ? "Tin tức" : "Blog"}
          </Link>
          <Link
            href="/tuyen-dung"
            className="px-[6px] py-[2px] whitespace-nowrap hover:underline border-r border-white"
          >
            {locale === "vi" ? "Tuyển dụng" : "Careers"}
          </Link>
          <button
            onClick={toggleLanguage}
            className="px-[6px] py-[2px] whitespace-nowrap hover:underline"
          >
            {locale === "vi" ? "English" : "Tiếng Việt"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
