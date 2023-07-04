export interface MainData {
  data: Data[];
}

export interface MainDataSingle {
  data: Data;
}

export interface Data {
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
    length: number;
    map: any;
    id: number;
    title: string;
  };
  colors: {
    map: any;
    id: number;
    title: string;
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
