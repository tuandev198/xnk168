import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactItemData {
  title: string;
  subtitle: React.ReactNode;
  icon: React.ReactNode;
  color: string; // thêm thuộc tính màu
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "7A Vo Van Bich Street, Binh My Ward, Cu Chi District, Ho Chi Minh City, Vietnam",
    icon: <MapPin className="h-5 w-5" />,
    color: "text-blue-600", // màu xanh dương
  },
  {
    title: "Call Us",
    subtitle: (
      <>
        +84 901366488 (Quang)
        <br />
        +84 938255328 (Tiến)
      </>
    ),
    icon: <Phone className="h-5 w-5" />,
    color: "text-green-600", // màu xanh lá
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 07:00 AM - 17:00 PM",
    icon: <Clock className="h-5 w-5" />,
    color: "text-amber-500", // màu cam
  },
  {
    title: "Email Us",
    subtitle: "ctytnhhsxdvtmxnk628@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    color: "text-red-500", // màu đỏ
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-b">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 group p-4 rounded-xl transition-all"
        >
          <div
            className={`flex items-center justify-center ${item.color} bg-gray-100 rounded-full h-10 w-10`}
          >
            {item.icon}
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
