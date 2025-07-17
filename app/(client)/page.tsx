import Clients from "@/components/Clients";
// import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
// import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

import BannerSlider from "../../components/BannerSlider";

import LatestBlog from "@/components/LatestBlog";

// import ProductXuiloin from "@/components/ProductXuiloin";

import ProductColextion from "@/components/ProductColextion";
import HomeBanner from "@/components/HomeBanner";
import banner_1 from "../../public/images/slide.jpg";
import WhyChooseUs from "@/components/WhyChooseUs";
import BestProductsSlider from "@/components/BestProductsSlider";


// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Công Ty Xuất Nhập Khẩu 628 - Xuất Nhập Khẩu Nông Sản, Thực Phẩm & Gia Dụng",
  description:
    "Chuyên sản xuất và xuất khẩu nông sản đông lạnh, thực phẩm chay, đồ khô, gia dụng... với các thương hiệu uy tín như 7Leaves, Dragonfly, Q’s American Best, Jumbo Elephant.",
  keywords: [
    "xuất khẩu Mỹ",
    "nông sản đông lạnh",
    "đồ chay",
    "bánh pía",
    "gia vị",
    "gia dụng",
    "hàng khô",
    "628",
    "7Leaves",
    "Dragonfly",
    "Jumbo Elephant",
    "Q’s American Best",
  ],
  openGraph: {
    title: "Công Ty Xuất Nhập Khẩu 628 - Xuất Khẩu Nông Sản & Thực Phẩm",
    description:
      "Thành lập năm 2016, Công Ty Xuất Nhập Khẩu 628 là đơn vị xuất khẩu hàng đầu về thực phẩm đông lạnh, đồ chay, hàng khô, gia dụng,... sang thị trường quốc tế như Mỹ.",
    url: "https://xuatnhapkhau628.com",
    siteName: "Công Ty Xuất Nhập Khẩu 628",
    images: [
      {
        url: "https://yourdomain.com/images/banner.jpg", // <-- Thay bằng ảnh thực tế
        width: 1200,
        height: 630,
        alt: "Công Ty TNHH 628 Xuất Nhập Khẩu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Công Ty Xuất Nhập Khẩu 628 - Xuất Khẩu Nông Sản & Thực Phẩm",
    description:
      "Thành lập năm 2016, chuyên sản xuất và xuất khẩu nông sản đông lạnh, đồ chay, hàng khô, bánh pía,... sang thị trường Mỹ và quốc tế.",
    images: ["https://yourdomain.com/images/banner.jpg"], // ảnh 1200x630
  },
};



export default function Home() {
    return (
        <main className="text-black">
            {/* <Container className="">
             
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                        Make your online presence a reality with us!
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600">
                        We are a group of developer working at the intersection of design
                        and technology. It is a really busy intersection though — a lot of
                        our staff have been involved in hit and runs.
                    </p>
                </FadeIn>
            </Container> */}

      <BannerSlider />  


            {/* <BannerSlider /> */}
            <Container className="mt-24 sm:mt-32">
                {/*<ProductCategories />*/}
                <BestProductsSlider />
                {/* <ProductXuiloin /> */}
                {/* <ProductColextion cx={"All Kinds of Candies and Snacks"}/> */}
            </Container>
            <WhyChooseUs />
            {/* <BestProductsSlider />*/}
            <Clients />
            <Container className="mt-24 sm:mt-32">
            {/* <ProductXuiloin /> */}
         <ProductColextion cx={"Dried Foods"} ct="Frozen Foods" title={"TILE A"}/>
            </Container>
                <HomeBanner image={banner_1}/>
                <Container className="mt-24 sm:mt-32">
             <ProductColextion cx={"Frozen Foods"} ct="Dried Foods" title={"TILE B"}/>
            </Container>
            <HomeBanner image={banner_1}/>  
{/* 
            <Container className="mt-24 sm:mt-32"> */}

             {/* <ProductColextion cx={"Household Cleaning"} ct="Beer, Soft Drinks" title={"TILE C"}/> */}

            {/* </Container>
             <HomeBanner image={banner_1}/> */}
            <Testimonials
                className="mt-24 sm:mt-32 lg:mt-40"
                client={{ name: "Phobia"}}
            >
                The team at Studio went above and beyond with our onboarding, even
                finding a way to access the user microphone without triggering one of
                those annoying permission dialogs.
            </Testimonials>
            <Container className="mt-24 sm:mt-32">
                <LatestBlog />
            </Container>
            {/* <Services /> */}
            
            {/* <ContactSection /> */}
        </main>
    );
}
