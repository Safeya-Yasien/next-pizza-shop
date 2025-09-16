"use client";

import Hero from "@/components/Hero";
import { ProductCatalog } from "@/components/products";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import VisitKitchen from "@/components/VisitKitchen";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useCatalogs } from "@/hooks/useCatalogs";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

const HomePage = () => {
  const { catalogs, isLoading } = useCatalogs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <Stats />
      <VisitKitchen />
      {catalogs.map((catalog) => (
        <ProductCatalog
          key={catalog.id}
          title={catalog.localizeInfos?.title as string}
          products={
            catalog.catalogProducts.items as unknown as IProductsEntity[]
          }
        />
      ))}
    </div>
  );
};
export default HomePage;
