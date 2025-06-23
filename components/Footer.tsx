// components/Footer.tsx
import Image from "next/image";
import Logo from "./Logo";
import FooterTop from "./FooterTop";
export default function Footer() {
  return (
    <div>
        <FooterTop/>

    <footer className="bg-[#0061ff] text-white px-8 py-12">
      
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
            Hotline: +84 901 36 6488 - Quang <br/> Fax: +84 938 255 328 - Tiến
          </p>
          <p className="mt-2 flex items-center">
            <span className="mr-2">✉️</span>
            Email: <a href="mailto:prs@pingroun.com.vn" className="underline">prs@pingroun.com.vn</a>
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
          <div className="rounded overflow-hidden shadow-lg w-fit">
             <Logo />
          </div>
        </div>
      </div>

      {/* Messenger floating icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <Image
          src="/images/ms.png"
          alt="Messenger"
          width={64}
          height={64}
          className="rounded-full shadow-lg"
        />
      </div>
    </footer>
    </div>
  );
}


// import React from "react";
// import Container from "./Container";
// import FooterTop from "./FooterTop";
// import Logo from "./Logo";
// import SocialMedia from "./SocialMedia";
// import { SubText, SubTitle } from "./ui/text";
// import { categoriesData, quickLinksData } from "@/constants/data";
// import Link from "next/link";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";

// const Footer = () => {
//   return (
//     <footer className=" border-t text-darkColor">
//       <Container>
//         <FooterTop />
//         <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
//           <div className="space-y-4">
//             <Logo />
//             <SubText>
//               CÔNG TY TNHH SẢN XUẤT DỊCH VỤ THƯƠNG MẠI XUẤT NHẬP KHẨU 628 <br/>
// MST: 0313578039<br/>
// Email: ctytnhhsxdvtmxnk628@gmail.com<br/>
// Hotline: +84 0313 578 039
//             </SubText>
//             <SocialMedia
//               className="text-darkColor/60"
//               iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
//               tooltipClassName="bg-darkColor text-white"
//             />
//           </div>
//           <div>
//             <SubTitle>Chinh sa</SubTitle>
//             <ul className="space-y-3 mt-4">
//               {categoriesData?.map((item) => (
//                 <li key={item?.title}>
//                   <Link
//                     href={`/category/${item?.href}`}
//                     className="hover:text-shop_light_green hoverEffect font-medium"
//                   >
//                     {item?.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="space-y-4">
//             <SubTitle>Newsletter</SubTitle>
//             <SubText>
//               Subscribe to our newsletter to receive updates and exclusive
//               offers
//             </SubText>
//             <form className="space-y-3">
//               <Input placeholder="Enter your email" type="email" required />
//               <Button className="w-full bg-shop_light_green hover:bg-shop_light_green/80">Subscribe</Button>
//             </form> 
//           </div>
//         </div>
//         <div className="py-6 border-t text-center text-sm text-gray-600">
//           <div>
//              {/* <Logo className="text-sm" /> */}
//             Copyright © {new Date().getFullYear()} cellvn all rights reserved.
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
