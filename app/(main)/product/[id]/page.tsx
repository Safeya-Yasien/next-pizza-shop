import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getProductDetails } from "@/actions/catalog/getProductDetails";
import { getRelatedProducts } from "@/actions/catalog/getRelatedProducts";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductDetailsPage = async ({ params }: ProductPageProps) => {
  const productId = parseInt(params.id);
  const product = await getProductDetails(productId);

  const title = product?.localizeInfos?.title as string;
  const description = product.attributeValues.p_description.value[0]
    .plainValue as string;
  const price = product.price;
  const image = product.attributeValues.p_image.value.downloadLink;

  const pageId = product.productPages[0].pageId;
  const relatedProducts = await getRelatedProducts(pageId, productId);

  return (
    <div className="relative bg-gradient-to-b from-orange-50 via-white to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 min-h-screen">
      {/* hero */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-28">
        {/* image side */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[320px] sm:w-[400px] lg:w-[480px] h-[320px] sm:h-[400px] lg:h-[480px] rounded-full shadow-2xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
            />
          </div>
          {/* floating badge */}
          <span className="absolute top-8 right-10 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
            Best Seller
          </span>
        </div>

        {/* content side */}
        <div className="mt-12 lg:mt-0 lg:ml-16 max-w-lg text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
            <p className="text-4xl font-black bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              ${price?.toFixed(2)}
            </p>
            <Button className="cursor-pointer flex items-center gap-2 px-8 py-6 rounded-2xl text-lg font-bold shadow-lg bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:scale-105 transition-transform">
              <ShoppingCart className="h-6 w-6" />
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="absolute top-20 left-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-gray-700 dark:text-gray-200 hover:text-red-500 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>
        </div>
      </section>

      {/* features */}
      <section className="px-6 lg:px-20 py-16 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Why You’ll Love It
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "🔥",
              title: "Wood Fired",
              desc: "Crispy crust perfection",
            },
            { icon: "🧀", title: "Cheesy", desc: "Loaded with mozzarella" },
            { icon: "🌶️", title: "Spicy", desc: "Pepperoni + jalapeños" },
          ].map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* story vibe */}
      <section className="px-6 lg:px-20 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Crafted With Passion
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Every Pepperoni Inferno pizza is hand-tossed, topped with premium
            pepperoni, organic jalapeños, and slow-cooked tomato sauce. Straight
            from the wood-fired oven to your table, it’s pizza with soul.
          </p>
        </div>
      </section>

      {/* related */}
      <section className="px-6 lg:px-20 py-16 bg-orange-50 dark:bg-gray-950/50">
        <h2 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Other Pizzas You Might Like
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
