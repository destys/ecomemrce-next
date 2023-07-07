import getBillboard from "@/actions/getBillboard";
import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";

import BillBoard from "@/components/ui/BillBoard";
import Container from "@/components/ui/Container";
import Filter from "./components/Filter";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilters from "./components/MobileFilters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const Category: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts([
    {
      fields: "category,id",
      operator: "eq",
      value: params.categoryId,
    },
    {
      fields: "colors,id",
      operator: searchParams?.colorId ? "eq" : "any",
      value: searchParams?.colorId,
    },
    {
      fields: "sizes,id",
      operator: searchParams?.sizeId ? "eq" : "any",
      value: searchParams?.sizeId,
    },
  ]);

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  const billboard = await getBillboard(
    category.data.attributes.billboard?.data?.id
  );

  return (
    <div className="bg-white">
      <Container>
        <BillBoard data={billboard} />
        <div className="p-4 sm:p-6 lg:p-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.data.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.data.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
