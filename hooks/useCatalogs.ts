"use client";

import { getCatalogWithProducts } from "@/actions/catalog/getCatalogWithProducts";
import { ICatalog, IProduct } from "@/types";
import { useEffect, useState } from "react";

export const useCatalogs = () => {
  const [catalogs, setCatalogs] = useState<ICatalog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCatalogs() {
      try {
        setIsLoading(true);

        const data = await getCatalogWithProducts();

        if (!data) {
          setCatalogs([]);
          setIsLoading(false);
          return;
        }

        const transformed: ICatalog[] = data.map((catalog) => ({
          ...catalog,
          catalogProducts: {
            items: catalog.catalogProducts.items.map((item: IProduct) => ({
              ...item,
              localizeInfos: {
                title: item.localizeInfos?.title || "Default Title",
              },
            })),
          },
        }));

        setCatalogs(transformed);
      } catch (error) {
        console.error(error);
        setCatalogs([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCatalogs();
  }, []);

  return { catalogs, isLoading };
};
