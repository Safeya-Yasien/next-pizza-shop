import { transformedProduct } from "@/utils/transformProduct";
import CategoryTitle from "./CategoryTitle";
import ProductsList from "./ProductsList";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { IProduct } from "@/types";

type TProductCatalogProps = {
  title: string;
  products: IProductsEntity[];
};

const ProductCatalog = ({ title, products }: TProductCatalogProps) => {
  // console.log("products in ProductCatalog:", products);

  const transformedProducts: IProduct[] = products.map(transformedProduct);

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-12">
        <CategoryTitle title={title} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {transformedProducts.map((product) => (
            <ProductsList key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductCatalog;
