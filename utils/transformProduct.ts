import { IProduct } from "@/types";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

export const transformedProduct = (product: IProductsEntity): IProduct => {
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
        return desc;
      })(),
      p_price: (() => {
        const price = product.attributeValues?.p_price;
        if (!price) return { value: 0 };
        // Handle OneEntry structure
        if (typeof price === "object" && "value" in price) {
          return {
            value: typeof price.value === "number" ? price.value : 0,
          };
        }
        return { value: 0 };
      })(),
      p_image: (() => {
        const image = product.attributeValues?.p_image;
        if (!image) return { value: { downloadLink: "" } };
        // Handle OneEntry structure
        if (typeof image === "object" && "value" in image) {
          return {
            value: { downloadLink: image.value?.downloadLink || "" },
          };
        }
        return { value: { downloadLink: "" } };
      })(),
      p_title: (() => {
        const title = product.attributeValues?.p_title;
        if (!title) return { value: "" };
        // Handle OneEntry structure
        if (typeof title === "object" && "value" in title) {
          return { value: String(title.value || "") };
        }
        return { value: "" };
      })(),
      p_available: (() => {
        const availableAttr =
          product.attributeValues?.p_available.value[0]?.title;

        // Handle simple {value} structure
        return availableAttr;
      })(),
    },
  };
};
