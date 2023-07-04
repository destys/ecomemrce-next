import { MainData } from "@/types";
import qs from "query-string";

const URL = `${process.env.STRAPI_PUBLIC_API_URL}/products?populate=*`;

interface Query {
  fields: string;
  operator: string;
  value: string | number;
}

const getProducts = async (query: Query[]): Promise<MainData> => {
  let filtersQuery = "";
  query.forEach((item, index) => {
    const fields = item.fields.split(",") || [];
    let fieldsRow = "";
    fields.forEach((item) => {
      fieldsRow += `[${item}]`;
    });

    filtersQuery += `&filters${fieldsRow}[$${item.operator}][${index}]=${item.value}`;
  });

  const url = URL + filtersQuery;

  const res = await fetch(url, {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
    },
  });

  return res.json();
};

export default getProducts;
