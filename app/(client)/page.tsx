import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

import BannerSlider from "../../components/BannerSlider";

import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";

import ProductCategories from "@/components/ProductCategories";
// import ProductXuiloin from "@/components/ProductXuiloin";

import ProductColextion from "@/components/ProductColextion";
import HomeBanner from "@/components/HomeBanner";
import banner_1 from "../../public/images/slide.jpg";
import WhyChooseUs from "@/components/WhyChooseUs";
import BestProductsSlider from "@/components/BestProductsSlider";


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
                <ProductCategories />
                {/* <ProductXuiloin /> */}
                {/* <ProductColextion cx={"All Kinds of Candies and Snacks"}/> */}
            </Container>
            <WhyChooseUs />
            <BestProductsSlider />
            <Clients />
            <Container className="mt-24 sm:mt-32">
            {/* <ProductXuiloin /> */}
         <ProductColextion cx={"All Kinds of Candies and Snacks"} ct="All Kinds of Milk" title={"TILE A"}/>
            </Container>
                <HomeBanner image={banner_1}/>
                <Container className="mt-24 sm:mt-32">
             <ProductColextion cx={"Household Items"} ct="Personal Care" title={"TILE B"}/>
            </Container>
            <HomeBanner image={banner_1}/>  

            <Container className="mt-24 sm:mt-32">

             <ProductColextion cx={"Household Cleaning"} ct="Beer, Soft Drinks" title={"TILE C"}/>

            </Container>
             <HomeBanner image={banner_1}/>
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
            <Services />
            
            <ContactSection />
        </main>
    );
}
