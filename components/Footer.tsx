// components/Footer.tsx
import Image from "next/image";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <div>
      <FooterTop />

      <footer className="bg-[#1c59fa] text-white px-8 py-12 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cột 1 - Thông tin công ty */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              CÔNG TY TNHH SẢN XUẤT DỊCH VỤ THƯƠNG MẠI XUẤT NHẬP KHẨU 628
            </h2>
            <p>GPĐKKD số 0313578039 do Sở KHĐT Tp.HCM</p>
            <p className="mt-4 flex items-start">
              <span className="mr-2">🏠</span>
              <span>
                Địa chỉ: Lô IV-8 đường số 4, khu công nghiệp Tân Bình, Phường Tây Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh.
              </span>
            </p>
            <p className="mt-2 flex items-center">
              <span className="mr-2">📞</span>
              Fax: +84 938 255 328 - Tiến
            </p>
            <p className="mt-2 flex items-center">
              <span className="mr-2">✉️</span>
              Email:{" "}
              <a href="mailto:ctytnhhsxdvtmxnk628@gmail.com" className="underline">
                ctytnhhsxdvtmxnk628@gmail.com
              </a>
            </p>
          </div>

          {/* Cột 2 - Chính sách bảo mật */}
          <div>
            <h2 className="text-xl font-bold mb-4">CHÍNH SÁCH BẢO MẬT</h2>
            <p>Mục đích và phạm vi thu thập thông tin</p>
            <p>Phạm vi sử dụng thông tin</p>
            <p>Thời gian lưu trữ thông tin</p>

            <div className="mt-6">
              <Image
                src="/images/ct.png"
                alt="Đã thông báo bộ công thương"
                width={160}
                height={60}
              />
            </div>
          </div>

          {/* Cột 3 - Kết nối */}
          <div>
            <h2 className="text-xl font-bold mb-4">KẾT NỐI VỚI CHÚNG TÔI</h2>
          <div className="flex items-center space-x-4 rounded overflow-hidden shadow-lg w-fit">
  <Image
    src="/images/logo628.png"
    alt="Đã thông báo bộ công thương"
    width={90}
    height={80}
  />
  <Image
    src="/images/628ab.png"
    alt="Đã thông báo bộ công thương"
    width={120}
    height={80}
  />
</div>
          </div>
        </div>

        {/* Messenger floating icon */}
          {/* <div className="fixed bottom-6 left-6 z-50">
            <Image
              src="/images/ms.png"
              alt="Messenger"
              width={64}
              height={64}
              className="rounded-full shadow-lg"
            />
          </div> */}

        {/* Phone floating icon with animation */}
        <a
          href="tel:+84901366488"
          className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg animate-phone-pulse hover:scale-110 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h1.28a2 2 0 011.73 1.01l1.3 2.26a2 2 0 01-.45 2.54L7.91 10.4a11.05 11.05 0 005.68 5.68l1.59-1.59a2 2 0 012.54-.45l2.26 1.3a2 2 0 011.01 1.73V19a2 2 0 01-2 2h-1c-8.28 0-15-6.72-15-15V5z"
            />
          </svg>
        </a>
      </footer>
    </div>
  );
}
