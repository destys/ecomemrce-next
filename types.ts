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
  sizes: Size[];
  colors: Color[];
  billboard: {
    data: Data;
  };
}

export interface Color {
  id: string;
  title: string;
  color: string;
}

export interface Size {
  id: string;
  title: string;
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
