import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 relative h-96">
        <Image src="/eel-left.jpg" alt="Eel Bowl" layout="fill" objectFit="cover" />
      </div>
      <div className="w-full md:w-1/2 relative h-96">
        <Image src="/eel-right.jpg" alt="Eel Dish" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
};

export default Banner;
