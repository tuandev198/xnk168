import Shop from "@/components/Shop";
import React from "react";
import { Suspense } from "react";

const ShopPage = async () => {
  return (
    <div className="bg-white">
      <Suspense fallback={<div>Loading...</div>}>
      <Shop />
      </Suspense>
    </div>
  );
};

export default ShopPage;
