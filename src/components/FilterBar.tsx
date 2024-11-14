'use client';

interface FilterBarProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
  onSortChange: (sortOrder: string) => void;
}

const FilterBar = ({ categories, onCategoryChange, onSortChange }: FilterBarProps) => {
  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center shadow-md mb-6">
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="p-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option value="">Все категории</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option value="">Сортировка по цене</option>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
  );
};

export default FilterBar;
