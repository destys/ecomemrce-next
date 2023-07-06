import { MainData } from "@/types";

const URL = `${process.env.STRAPI_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<MainData> => {
  const res = await fetch(URL, {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
    },
  });

  return res.json();
};

export default getColors;
