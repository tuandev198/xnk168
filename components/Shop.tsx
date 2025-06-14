"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
// import Title from "./Title";
import CategoryList from "./shop/CategoryList";
import { useSearchParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";
import { Loader2, List, Grid2X2 } from "lucide-react";


const Shop = () => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");
  const [products, setProducts] = useState([]);
const [categories, setProductss] = useState([]);
  const [loading, setLoading] = useState(false);



  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const [sortOption, setSortOption] = useState<string>("featured");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParams || null
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      let minPrice = 0;
      let maxPrice = 10000;
      if (selectedPrice) {  
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }
      const query = ` 
      *[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
      ] 
      | order(name asc) {
        ...,"categories": categories[]->title
      }
    `;
      const data = await client.fetch(
        query,
        { selectedCategory, selectedBrand, minPrice, maxPrice },
        { next: { revalidate: 0 } }
      );
      setProducts(data);
    } catch (error) {
      console.log("Shop product fetching Error", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductss = async () => {
    setLoading(true);
    try {
      let minPrice = 0;
      let maxPrice = 10000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }
      const query = ` 
      *[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
        && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
        && price >= $minPrice && price <= $maxPrice
      ] 
      | order(name asc) {
        ...,"categories": categories[]->title
      }
    `;
      const data = await client.fetch(
        query,
        { selectedCategory, selectedBrand, minPrice, maxPrice },
        { next: { revalidate: 0 } }
      );
      setProductss(data);
      console.log(data);
    } catch (error) {
      console.log("Shop product fetching Error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProductss();
  }, []);
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedBrand, selectedPrice]);


  return (
    <div className="border-t">
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5">
          <div className="flex items-center justify-between flex-wrap gap-3 pb-3">
            <div className="flex gap-2">
              <button onClick={() => setViewMode("grid")} className={`p-1 border rounded-full w-9 h-9 flex items-center justify-center ${viewMode === 'grid' ? 'bg-orange-100 text-orange-800 border-orange-800' : ''}`}>
                <Grid2X2 className="w-5 h-5" />
              </button>
              <button onClick={() => setViewMode("list")} className={`p-1 border rounded-full w-9 h-9 flex items-center justify-center ${viewMode === 'list' ? 'bg-orange-100 text-orange-800 border-orange-800' : ''}`}>
                <List className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-1">
                <span>Paginate by</span>
                <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} className="border px-2 py-1 rounded-full border-orange-800 text-orange-800">
                  {[9, 12, 18].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-1">
                <span>Sort by</span>
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="border px-2 py-1 rounded-full border-orange-800 text-orange-800">
                  <option value="featured">Featured</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                </select>
              </div>
            </div>
            {(selectedCategory || selectedBrand || selectedPrice) && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedBrand(null);
                  setSelectedPrice(null);
                }}
                className="text-orange-800 underline text-sm mt-2 font-medium hover:text-red-700"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 border-orange-800/50">
          <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 border-r-orange-800/50 scrollbar-hide">
            <CategoryList
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </div>

          <div className="flex-1 pt-5">
            <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-hide">
              {loading ? (
                <div className="p-20 flex flex-col gap-2 items-center justify-center bg-white">
                  <Loader2 className="w-10 h-10 text-orange-800 animate-spin" />
                  <p className="font-semibold tracking-wide text-base">Product is loading . . .</p>
                </div>
              ) : products?.length > 0 ? (
                <div className={`grid ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-2.5`}>
                  {products.slice(0, itemsPerPage).map((product, index) => (
                    <ProductCard key={index} product={product} viewMode={viewMode} />
                  ))}
                </div>
              ) : (
                <NoProductAvailable className="bg-white mt-0" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
  
// "use client";
// import React, { useEffect, useState } from "react";
// import Container from "./Container";
// import Title from "./Title";
// import CategoryList from "./shop/CategoryList";
// import { useSearchParams } from "next/navigation";
// import { client } from "@/sanity/lib/client";
// import { Loader2, List, Grid2X2 } from "lucide-react";
// import NoProductAvailable from "./NoProductAvailable";
// import ProductCard from "./ProductCard";

// const Shop = () => {
//   const searchParams = useSearchParams();
//   const brandParams = searchParams?.get("brand");
//   const categoryParams = searchParams?.get("category");

//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParams || null);
//   const [selectedBrand, setSelectedBrand] = useState<string | null>(brandParams || null);
//   const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [itemsPerPage, setItemsPerPage] = useState<number>(9);
//   const [sortOption, setSortOption] = useState<string>("featured");

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       let minPrice = 0;
//       let maxPrice = 10000;
//       if (selectedPrice) {
//         const [min, max] = selectedPrice.split("-").map(Number);
//         minPrice = min;
//         maxPrice = max;
//       }

//       let orderQuery = "| order(name asc)";
//       if (sortOption === "low-to-high") orderQuery = "| order(price asc)";
//       else if (sortOption === "high-to-low") orderQuery = "| order(price desc)";

//       const query = ` 
//         *[_type == 'product' 
//           && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
//           && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
//           && price >= $minPrice && price <= $maxPrice
//         ] 
//         ${orderQuery} {
//           ...,
//           "categories": categories[]->title
//         }
//       `;

//       const data = await client.fetch(query, { selectedCategory, selectedBrand, minPrice, maxPrice }, { next: { revalidate: 0 } });
//       setProducts(data);
//     } catch (error) {
//       console.log("Shop product fetching Error", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [selectedCategory, selectedBrand, selectedPrice, sortOption]);

//   return (
//     <div className="border-t">
//       <Container className="mt-5">
//         <div className="sticky top-0 z-10 mb-5">
//           <div className="flex items-center justify-between flex-wrap gap-3 border-b pb-3">
//             <div className="flex gap-2">
//               <button onClick={() => setViewMode("grid")} className={`p-1 border rounded-full w-9 h-9 flex items-center justify-center ${viewMode === 'grid' ? 'bg-orange-100 text-orange-800 border-orange-800' : ''}`}>
//                 <Grid2X2 className="w-5 h-5" />
//               </button>
//               <button onClick={() => setViewMode("list")} className={`p-1 border rounded-full w-9 h-9 flex items-center justify-center ${viewMode === 'list' ? 'bg-orange-100 text-orange-800 border-orange-800' : ''}`}>
//                 <List className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="flex gap-4 items-center">
//               <div className="flex items-center gap-1">
//                 <span>Paginate by</span>
//                 <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} className="border px-2 py-1 rounded-full border-orange-800 text-orange-800">
//                   {[9, 12, 18].map((num) => (
//                     <option key={num} value={num}>{num}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex items-center gap-1">
//                 <span>Sort by</span>
//                 <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="border px-2 py-1 rounded-full border-orange-800 text-orange-800">
//                   <option value="featured">Featured</option>
//                   <option value="low-to-high">Price: Low to High</option>
//                   <option value="high-to-low">Price: High to Low</option>
//                 </select>
//               </div>
//             </div>
//             {(selectedCategory || selectedBrand || selectedPrice) && (
//               <button
//                 onClick={() => {
//                   setSelectedCategory(null);
//                   setSelectedBrand(null);
//                   setSelectedPrice(null);
//                 }}
//                 className="text-orange-800 underline text-sm mt-2 font-medium hover:text-red-700"
//               >
//                 Reset Filters
//               </button>
//             )}
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row gap-5 border-t border-orange-800/50">
//           <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-orange-800/50 scrollbar-hide">
//             <CategoryList
//               selectedCategory={selectedCategory}
//               setSelectedCategory={setSelectedCategory}
//               categories={categories}
//             />
//           </div>

//           <div className="flex-1 pt-5">
//             <div className="h-[calc(100vh-160px)] overflow-y-auto pr-2 scrollbar-hide">
//               {loading ? (
//                 <div className="p-20 flex flex-col gap-2 items-center justify-center bg-white">
//                   <Loader2 className="w-10 h-10 text-orange-800 animate-spin" />
//                   <p className="font-semibold tracking-wide text-base">Product is loading . . .</p>
//                 </div>
//               ) : products?.length > 0 ? (
//                 <div className={`grid ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-2.5`}>
//                   {products.slice(0, itemsPerPage).map((product, index) => (
//                     <ProductCard key={index} product={product} viewMode={viewMode} />
//                   ))}
//                 </div>
//               ) : (
//                 <NoProductAvailable className="bg-white mt-0" />
//               )}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Shop;
