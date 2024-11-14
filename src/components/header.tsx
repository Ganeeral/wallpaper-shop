'use client';

import { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  onSearch: (value: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <span className="text-3xl font-bold cursor-pointer">🛒 Wallpaper Shop</span>
        </Link>
        <input
          type="text"
          className="rounded-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="🔍 Поиск..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
    </header>
  );
};

export default Header;
