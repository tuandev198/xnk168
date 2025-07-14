const vi = {



    greeting: "Hello",
  language: "Language",
  switch_to_vi: "Switch to Vietnamese",

  product_catalog: "Product Catalog",
  categories: {
    que: "Cinnamon",
    ot: "Chili",
    hoahoi: "Star Anise",
    thaoqua: "Black Cardamom",
    sa: "Lemongrass",
    lachuoi: "Banana Leaf",
    mia: "Sugarcane",
    bun: "Rice Noodles",
    banhtrang: "Rice Paper",
    chanhday: "Passion Fruit",
  },
   nav: {
    home: "Home",
    products: "Products",
    contact: "Contact",
    about: "About Us",
    feedback: "Feedback",
    submenu: {
      dry: "Dry Goods",
      frozen: "Frozen Goods",
      household: "Household Goods",
      clean: "Clean Food",
      send: "Send Feedback",
      consult: "Business Consultation",
      story: "Brand Story",
      cert: "Certifications",
      award: "Awards",
      intro: "Business Introduction",
    },
  },
   whyChooseUs: {
    title: "Why choose us?",
    description: "With dedicated artisans and talented staff along with inspiring baking stories, Binh Vinh is the choice for those who are passionately in love with the taste of delicious dishes.",
    benefits: [
      {
        title: "Affordable Prices",
        desc: "Committed to providing products with traceable and controlled quality.",
      },
      {
        title: "Exquisite Flavor",
        desc: "Ingredients are carefully selected at their freshest stage.",
      },
      {
        title: "High-Quality Products",
        desc: "Guaranteeing strictly controlled and traceable product origins.",
      },
    ],
  },
   bestProducts: {
    title: "Product Catalog",
    description: "Pellentesque massa placerat duis ultricies lacus sit sed.",
    categories: ["Dried seeds", "Spicy Masalas"],
    saleLabel: "Sale",
    products: [
        { name: "Banana Leaf", price: 969, oldPrice: 1000, sale: true , imageUrl: '/images/lachuoi.jpg', link:"/shop"},
     
      { name: "Rice Noodles", price: 197, oldPrice: 300, sale: true , imageUrl: '/images/bun.jpg', link:"/shop"},
      { name: "Rice Paper", price: 197, oldPrice: 300, sale: true , imageUrl: '/images/banhtrang.jpg', link:"/shop"},
       { name: "Coriander", price: 197, oldPrice: 300, sale: true , imageUrl: '/images/chanhday.jpg', link:"/shop"},
      { name: " Black Cardamom", price: 199, oldPrice: 405, sale: true, imageUrl: '/images/QUE.jpg', link:"/shop" },
      { name: "Chili", price: 289, sale: false, imageUrl: '/images/OT.jpg', link:"/shop" },
      { name: "Cinnamon", price: 289, sale: false , imageUrl: '/images/THAOQUA.jpg', link:"/shop"},
      { name: "Lemongrass", price: 197, oldPrice: 300, sale: true, imageUrl: '/images/sa.jpg', link:"/shop" },
    
        { name: "Sugarcane", price: 289, sale: false, imageUrl: '/images/mia.jpg' , link:"/shop"},
    ],
  },
};
export default vi;
