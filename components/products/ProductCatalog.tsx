import { transformedProduct } from "@/utils/transformProduct";
import CategoryTitle from "./CategoryTitle";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import { IProduct } from "@/types";
import ProductCard from "./ProductCard";

type TProductCatalogProps = {
  title: string;
  products: IProductsEntity[];
};

const ProductCatalog = ({ title, products }: TProductCatalogProps) => {
  const transformedProducts: IProduct[] = products.map(transformedProduct);

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-12">
        <CategoryTitle title={title} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {transformedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductCatalog;
