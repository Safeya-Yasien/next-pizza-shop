"use client";

import { useEffect, useState } from "react";
import { IProduct } from "@/types";
import { transformedProduct } from "@/utils/transformProduct";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

export type TAvailability = "all" | "in-stock" | "out-of-stock";
export type TSort = "relevance" | "price-low" | "price-high" | "newest";

export interface IFilters {
  priceRange: [number, number];
  availability: TAvailability;
  sort: TSort;
}

export const useProductFilters = (rawProducts: IProductsEntity[]) => {
  const [filters, setFilters] = useState<IFilters>({
    priceRange: [0, 100],
    availability: "all",
    sort: "relevance",
  });
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (!rawProducts.length) return;

    const transformedProducts = rawProducts.map(transformedProduct);
    let filtered = [...transformedProducts];

    // price range
    filtered = filtered.filter((p) => {
      const price = p.price || p.attributeValues?.p_price?.value || 0;
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // availability
    if (filters.availability !== "all") {
      filtered = filtered.filter((p) => {
        const available = p.attributeValues?.p_available?.toLowerCase() || "";
        return filters.availability === "in-stock"
          ? available.includes("available")
          : !available.includes("available");
      });
    }

    // sort
    const getPrice = (p: IProduct) =>
      p.price || p.attributeValues?.p_price?.value || 0;
    switch (filters.sort) {
      case "price-low":
        filtered.sort((a, b) => getPrice(a) - getPrice(b));
        break;
      case "price-high":
        filtered.sort((a, b) => getPrice(b) - getPrice(a));
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break; // relevance → no sorting
    }

    setFilteredProducts(filtered);
  }, [rawProducts, filters]);

  return { filters, setFilters, filteredProducts };
};
