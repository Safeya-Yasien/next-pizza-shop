"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { searchProductsAction } from "@/actions/catalog/searchProducts";
import { useRouter } from "next/navigation";
import { IProduct } from "@/types";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import ProductCard from "@/components/products/ProductCard";
import { transformedProduct } from "@/utils/transformProduct";

const SearchPage = () => {
  const params = useSearchParams();
  const searchTerm = params.get("search");
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(searchTerm || "");
  const [products, setProducts] = useState<IProductsEntity[]>([]);

  useEffect(() => {
    setSearchQuery(searchTerm || "");
  }, [searchTerm]);

  useEffect(() => {
    const getSearchedProducts = async () => {
      if (searchQuery) {
        const data = await searchProductsAction({ query: searchQuery });
        setProducts(data as IProductsEntity[]);
      }
    };
    getSearchedProducts();
  }, [searchQuery]);

  const transformedProducts: IProduct[] = products.map(transformedProduct);

  const handleSearch = () => {
    const searchParams = new URLSearchParams(params?.toString());
    searchParams.set("search", searchQuery);
    router.push("/search?" + searchParams.toString());
  };

  const [availability, setAvailability] = useState("all");
  const [sort, setSort] = useState("relevance");

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
                  placeholder="0"
                  className="w-28 pl-7 pr-4 py-3 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-gray-400"
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
                  className="w-28 pl-7 pr-4 py-3 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-gray-400"
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
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
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
                value={sort}
                onChange={(e) => setSort(e.target.value)}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {transformedProducts.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
