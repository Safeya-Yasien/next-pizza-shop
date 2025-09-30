import Hero from "@/components/Hero";
import { ProductCatalog } from "@/components/products";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import VisitKitchen from "@/components/VisitKitchen";
import WhyChooseUs from "@/components/WhyChooseUs";
import { fetchCatalogs } from "@/lib/catalogs";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const catalogs = await fetchCatalogs();

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <TrustBadges />
      {catalogs.map((catalog) => (
        <ProductCatalog
          key={catalog.id}
          title={catalog.localizeInfos?.title as string}
          products={
            catalog.catalogProducts.items as unknown as IProductsEntity[]
          }
        />
      ))}
      <VisitKitchen />
      <Stats />
      <Testimonials />
    </div>
  );
};
export default HomePage;
