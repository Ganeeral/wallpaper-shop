"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";

const ProductPage = () => {
  const params = useParams();
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) return <p>Товар не найден</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
      <p>Цена: {product.price}₽</p>
    </div>
  );
};

export default ProductPage;
