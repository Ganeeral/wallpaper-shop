"use client";

import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Header from "@/components/header";
import HeroSlider from "../components/HeroSlider";
import FilterBar from "../components/FilterBar";

const images = ["/wallpaper1.jpg", "/wallpaper2.jpg", "/wallpaper3.jpg"];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true));

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchTerm} />
      <div className="container mx-auto px-4">
        <FilterBar
          categories={categories}
          onCategoryChange={setCategory}
          onSortChange={setSortOrder}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p className="text-center col-span-3">Товары не найдены</p>
          )}
        </div>
      </div>
      <HeroSlider images={images} />
    </div>
  );
};

export default Home;
