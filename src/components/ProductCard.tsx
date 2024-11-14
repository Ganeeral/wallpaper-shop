'use client';

import Link from "next/link";
import OrderModal from "./OrderModal";
import { useState } from "react";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
  color: string;
}

const ProductCard = ({ id, name, image, price, stock, color }: ProductProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="border p-4 rounded-lg">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-lg">Цена: {price}₽</p>
      <p className="text-lg">Цвет: {color}₽</p>
      <Link href={`/product/${id}`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Подробнее
        </button>
      </Link>
      {stock > 0 ? (
        <button className="bg-green-600 text-white px-4 py-2 rounded mt-4">
          В корзину
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Заказать
        </button>
      )}
      <OrderModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ProductCard;
