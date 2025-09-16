import { IProduct } from "@/types";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

export function transformProduct(product: IProductsEntity): IProduct {
  return {
    id: product.id,
    localizeInfos: {
      title: product.localizeInfos?.title || {},
    },
    price: product.price,
    attributeValues: {
      p_description: (() => {
        const desc = product.attributeValues?.p_description;

        if (!desc) return { value: [] };

        // لو جاي من OneEntry بالـ htmlValue
        if (typeof desc === "object" && "htmlValue" in desc) {
          return { value: [{ htmlValue: desc.htmlValue }] };
        }

        // لو جاي في value عادي
        if (typeof desc === "object" && "value" in desc) {
          return { value: [{ htmlValue: String(desc.value || "") }] };
        }

        return { value: [] };
      })(),

      p_price: (() => {
        const price = product.attributeValues?.p_price;
        if (price && typeof price === "object" && "value" in price) {
          return { value: typeof price.value === "number" ? price.value : 0 };
        }
        return { value: 0 };
      })(),
      p_image: (() => {
        const image = product.attributeValues?.p_image;
        if (image && typeof image === "object" && "value" in image) {
          return { value: { downloadLink: image.value?.downloadLink || "" } };
        }
        return { value: { downloadLink: "" } };
      })(),
      p_title: (() => {
        const title = product.attributeValues?.p_title;
        if (title && typeof title === "object" && "value" in title) {
          return { value: String(title.value || "") };
        }
        return { value: "" };
      })(),
      p_available:
        product.attributeValues?.p_available?.value?.[0]?.title || "",
    },
  };
}
