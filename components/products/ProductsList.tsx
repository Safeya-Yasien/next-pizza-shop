import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductsList = ({ product }: { product: IProduct }) => {
  const {
    id,
    attributeValues: { p_description, p_price, p_image, p_title, p_available },
  } = product;

  const title =
    (typeof p_title.value === "string" && p_title.value) || "Untitled Pizza";
  const description = Array.isArray(p_description?.value)
    ? p_description.value[0]?.htmlValue || "No description available"
    : p_description?.value || "No description available";

  const price = `$${p_price?.value || 0}`;
  const image = p_image?.value?.downloadLink || "/images/default-pizza.jpg";
  const available =
    typeof p_available === "string" &&
    p_available.toLowerCase() === "available";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-0 flex flex-col overflow-hidden">
      <Link
        href={`/pizza/${id}`}
        className="relative w-full h-56 overflow-hidden group"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform transition-transform duration-400 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
            View Pizza
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <p className="text-orange-500 font-bold text-lg">{price}</p>
          {available && (
            <span className="flex items-center gap-1 text-green-700 font-semibold text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-700 inline-block" />
              Available
            </span>
          )}
        </div>

        {available ? (
          <button className="cursor-pointer bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white py-2 px-4 rounded-xl font-semibold hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transition-all duration-200">
            Add to Cart 🍕
          </button>
        ) : (
          <div className="text-red-600 font-semibold flex items-center justify-center py-2 rounded-xl bg-red-100">
            Out of Order ❌
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductsList;
