"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IProduct } from "@/types";
import ProductCard from "@/components/products/ProductCard";
import {
  TAvailability,
  TSort,
  useProductFilters,
} from "@/hooks/useProductFilters";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSearchProducts } from "@/hooks/useSearchProducts";

const SearchPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const searchTerm = params.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(searchTerm);

  // fetch search results
  const { products, loading } = useSearchProducts(searchQuery);

  // apply filters
  const { filters, setFilters, filteredProducts } = useProductFilters(products);

  const handleSearch = () => {
    const sp = new URLSearchParams(params.toString());
    sp.set("search", searchQuery);
    router.push(`/search?${sp.toString()}`);
  };

  useEffect(() => {
    setSearchQuery(searchTerm);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-6 lg:px-20 pt-28 pb-16">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Find Your Perfect Pizza
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Search through our menu and filter by type to discover your next
          favorite.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 relative">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-400 w-6 h-6" />
          <Input
            type="text"
            placeholder="Search delicious pizzas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-14 pr-5 rounded-2xl shadow-lg bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 text-xl leading-tight font-semibold text-gray-800 dark:text-gray-100 placeholder:text-gray-400 placeholder:italic focus:ring-2 focus:ring-orange-400 focus:border-orange-400 w-full h-14"
          />
        </div>
        <Button
          onClick={handleSearch}
          className="cursor-pointer h-14 px-10 rounded-2xl font-bold text-lg bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
        >
          Search
        </Button>
      </div>

      {/* Filters Toolbar */}
      <div className="backdrop-blur-xl bg-white/90 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-xl rounded-3xl px-8 py-10 mb-14 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          {/* Price Range */}
          <div className="flex flex-col w-full lg:w-auto">
            <label className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
              Price Range
            </label>
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  $
                </span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  className="w-28 pl-7 pr-4 py-3 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-gray-400"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      priceRange: [
                        Number(e.target.value),
                        filters.priceRange[1],
                      ],
                    })
                  }
                />
              </div>
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                —
              </span>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  $
                </span>
                <input
                  type="number"
                  placeholder="100"
                  min={0}
                  max={100}
                  className="w-28 pl-7 pr-4 py-3 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-gray-400"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      priceRange: [
                        filters.priceRange[0],
                        Number(e.target.value),
                      ],
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="flex flex-col w-full lg:w-auto">
            <label className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
              Availability
            </label>
            <div className="relative">
              <select
                value={filters.availability}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    availability: e.target.value as TAvailability,
                  })
                }
                className="w-56 appearance-none px-5 py-4 text-base font-medium rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
              >
                <option value="all">All Items</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                ▼
              </span>
            </div>
          </div>

          {/* Sort By */}
          <div className="flex flex-col w-full lg:w-auto">
            <label className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
              Sort By
            </label>
            <div className="relative">
              <select
                value={filters.sort}
                onChange={(e) =>
                  setFilters({ ...filters, sort: e.target.value as TSort })
                }
                className="w-56 appearance-none px-5 py-4 text-base font-medium rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                ▼
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
