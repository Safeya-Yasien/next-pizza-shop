import { IProduct } from "./product.types";

export interface ICatalog {
  id: number;
  localizeInfos?: {
    title?: string;
  };
  catalogProducts: {
    items: IProduct[];
  };
}
