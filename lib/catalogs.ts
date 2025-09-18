import { getCatalogWithProducts } from "@/actions/catalog/getCatalogWithProducts";
import { ICatalog, IProduct } from "@/types";

export async function fetchCatalogs(): Promise<ICatalog[]> {
  const data = await getCatalogWithProducts();

  if (!data) return [];

  return data.map((catalog) => ({
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
}
