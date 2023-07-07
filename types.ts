export interface MainData {
  data: Data[];
}

export interface MainDataSingle {
  data: Data;
}

export interface Data {
  length?: number;
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  price: string | number;
  isFeatured: boolean;
  images: Images;
  image: Image;
  category: Category;
  sizes: Sizes;
  colors: Colors;
  color: string;
  billboards: {
    data: Data;
  };

  billboard: {
    data: Data;
  };
}

export interface Colors {
  data: Data[];
}

export interface Sizes {
  data: Data[];
}

export interface Images {
  data: DataImage[];
}

export interface Image {
  data: DataImage;
}

export interface DataImage {
  id: string;
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
