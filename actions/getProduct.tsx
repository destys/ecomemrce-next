import { MainDataSingle } from "@/types";

const URL = `${process.env.STRAPI_PUBLIC_API_URL}/products`;

const getProduct = async (id: number): Promise<MainDataSingle> => {
  const res = await fetch(`${URL}/${id}?populate=*`, {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
    },
  });

  return res.json();
};

export default getProduct;
