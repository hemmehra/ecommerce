import React from "react";
import { Link } from "react-router-dom";

export default function Product(singleProduct) {
  console.log(singleProduct.item);
  return (
    <>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link to={`/product/${singleProduct.item.id}`} className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={singleProduct.item.image}
            />
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {singleProduct.item.category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {singleProduct.item.title}
            </h2>
            <p className="mt-1">${singleProduct.item.price}</p>
          </div>
        </div>
    </>
  );
}
