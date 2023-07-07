import { MainDataSingle } from "@/types";

const URL = `${process.env.STRAPI_PUBLIC_API_URL}`;
console.log('URL: ', URL);

const getPage = async (slug: string): Promise<MainDataSingle> => {
  const res = await fetch(`${URL}/${slug}?populate=*`, {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
    },
  });

  return res.json();
};

export default getPage;
