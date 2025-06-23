import { FaPhoneAlt } from "react-icons/fa";
// 0061ff
const Header = () => {
  return (
    <header className="bg-[#0648ff] text-white text-[10px] md:text-sm">
      <div className="flex flex-col md:flex-row md:justify-between items-center px-2 py-1 md:px-4 md:py-2 gap-1">
        {/* Ẩn ở mobile, chỉ hiển thị từ md trở lên */}
        <div className="hidden md:flex items-center gap-2">
          <span className="whitespace-nowrap">📧 CONTACT</span>
          <FaPhoneAlt className="text-xs" />
          <span className="whitespace-nowrap">+84 0901366488 Quang</span>
        </div>

        {/* Menu: luôn nằm 1 dòng, không scroll, không xuống dòng */}
        <div className="flex flex-nowrap justify-center gap-[6px]">
          {["Tin tức", "Tuyển dụng","Tiếng Việt", "English"].map((item, index, array) => (
            <a
              key={item}
              href="#"
              className={`px-[6px] py-[2px] whitespace-nowrap ${
                index !== array.length - 1 ? "border-r border-white" : ""
              }`}
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
