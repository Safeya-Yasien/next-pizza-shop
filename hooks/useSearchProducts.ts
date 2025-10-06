"use client";

import { useEffect, useState } from "react";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { searchProductsAction } from "@/actions/catalog/searchProducts";

export const useSearchProducts = (searchQuery: string) => {
  const [products, setProducts] = useState<IProductsEntity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchQuery) return;
      setLoading(true);
      const data = await searchProductsAction({ query: searchQuery });
      setProducts(data as IProductsEntity[]);
      setLoading(false);
    };
    fetchProducts();
  }, [searchQuery]);

  return { products, loading };
};
