export interface MainData {
  data: Data[];
}

export interface MainDataSingle {
  data: Data;
}

export interface Data {
  length?: number;
  map?(arg0: (size: any, index: number) => any): import("react").ReactNode;
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  price: string | number;
  isFeatured: boolean;
  images: Images;
  image: Image;
  category: Category;
  sizes: {
    data: Data;
  };
  colors: {
    data: Data;
  };
  billboard: {
    data: Data;
  };
}

export interface Images {
  data: DataImage[];
}

export interface Image {
  data: DataImage;
}

export interface DataImage {
  id: number;
  attributes: ImageAttributes;

  data: DataImage;
}

export interface ImageAttributes {
  name: string;
  width: number;
  height: number;
  url: string;
}

export interface Category {
  data: Data;
}

//========================================================================================================================================================
