"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
const menuItems = [
  {
    title: "HOME",
    href: "/",
    submenu: [],
  },
  {
    title: "PRODUCTS",
    href: "/shop",
    submenu: [
      { title: "Japanese Eel", href: "/luon-nhat" },
      { title: "Frozen Eel", href: "/luon-dong-lanh" },
    ],
  },
  {
    title: "CONTACT",
    href: "/lien-he",
    submenu: [
      { title: "Send Feedback", href: "/phan-hoi" },
      { title: "Business Consultation", href: "/tu-van" },
    ],
  },
  {
    title: "ABOUT US",
    href: "/ve-chung-toi",
    submenu: [
      { title: "Brand Story", href: "https://facebook.com", target: "_blank" },
      { title: "Certifications", href: "https://zalo.me", target: "_blank" },
      { title: "Awards", href: "https://zalo.me", target: "_blank" },
      { title: "Business Introduction", href: "https://zalo.me", target: "_blank" },
    ],
  },
  {
    title: "FEEDBACK",
    href: "/phan-hoi",
    submenu: [],
  },
];


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Image src="/images/logo628.png" alt="logo" width={70} height={70} />
          <Image src="/images/628ab.png" alt="logo2" width={70} height={70} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-base font-medium">
          {menuItems.map((item) => (
            <li key={item.title} className="relative group">
              <Link
                href={item.href || "#"}
                className="font-semibold hover:text-[#0061ff] flex items-center gap-2"
              >
                {item.title}
                {item.submenu.length > 0 && <span className="text-xs">▼</span>}
              </Link>

              {item.submenu.length > 0 && (
                <div className="absolute left-0 top-full mt-3 w-56 bg-white border rounded-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                  <ul className="py-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.href}
                          target={subItem.target || "_self"}
                          className="block px-5 py-2 text-sm hover:bg-gray-100 font-medium"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {menuItems.map((item, index) => (
              <li key={item.title}>
                {item.submenu.length > 0 ? (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="flex justify-between items-center w-full font-semibold"
                  >
                    <Link href={item.href} className="flex-1 text-left">
                      {item.title}
                    </Link>
                    <span className="text-xs">
                      {openIndex === index ? "▲" : "▼"}
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block font-semibold py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Submenu */}
                <AnimatePresence initial={false}>
                  {openIndex === index && item.submenu.length > 0 && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-2 text-sm text-gray-700 overflow-hidden"
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            target={subItem.target || "_self"}
                            className="block py-1"
                          >
                            - {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
