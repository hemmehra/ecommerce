import React, { useEffect, useState } from "react";
import {Product} from "../index.js";

export default function Products() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  },[]);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              Products.map((productItem) => (
                <Product key={productItem.id} item={productItem} /> 
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}
