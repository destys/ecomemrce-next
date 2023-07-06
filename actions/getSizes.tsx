import { MainData } from "@/types";

const URL = `${process.env.STRAPI_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<MainData> => {
  const res = await fetch(URL, {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
    },
  });

  return res.json();
};

export default getSizes;
