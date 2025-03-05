"use client";
import { useState } from "react";
import { rices, beverages, buns } from "./data";
import ProductCard from "../components/ProductCard";
import CartItems from "../components/CartItems"; 

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("rices");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  const getProducts = () => {
    if (selectedCategory === "rices") return rices;
    if (selectedCategory === "beverages") return beverages;
    if (selectedCategory === "buns") return buns;
    return [];
  };

 
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>

      {/* Category Selection Buttons */}
      <div className="flex justify-center space-x-3 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "rices" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("rices")}
        >
          Rices
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "beverages" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("beverages")}
        >
          Beverages
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "buns" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("buns")}
        >
          Buns
        </button>
      </div>

      {/* Flex Layout for Products & Cart */}
      <div className="flex gap-4">
        {/* Product List */}
        <div className="w-[80%] grid grid-cols-3 gap-6">
          {getProducts().map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {/* Cart Items */}
        <CartItems cart={cart} />
      </div>
    </div>
  );
}
