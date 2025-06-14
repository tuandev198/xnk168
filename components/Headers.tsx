import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#0061ff] text-white text-sm">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Ẩn ở mobile, chỉ hiển thị từ md trở lên */}
        <div className="hidden md:flex items-center gap-2">
          <span>📧 CONTACT</span>
          <FaPhoneAlt />
          <span>+84 0901366488 Quang</span>
        </div>

        {/* Menu bên phải vẫn hiện mọi kích thước */}
        <div className="flex gap-3">
          {["Tin tức", "Tuyển dụng", "Liên hệ", "Tiếng Việt", "English"].map((item, index, array) => (
            <a
              key={item}
              href="#"
              className={`pr-3 ${index !== array.length - 1 ? "border-r border-white" : ""}`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
