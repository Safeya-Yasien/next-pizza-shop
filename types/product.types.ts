interface ITextValue {
  mdValue?: string;
  htmlValue?: string;
  plainValue?: string;
}

export interface IProduct {
  id: number;
  localizeInfos: { title: Record<string, any> };
  price: number | null;
  attributeValues: {
    p_description: { value: ITextValue[] };
    p_price: { value: number };
    p_image: { value: { downloadLink: string } };
    p_title: { value: string };
    p_available: any;
  };
}
