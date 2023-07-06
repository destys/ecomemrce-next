import getBillboard from "@/actions/getBillboard";
import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";

import BillBoard from "@/components/ui/BillBoard";
import Container from "@/components/ui/Container";
import Filter from "../../product/[productId]/components/Filter";

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
      fields: "colors,attributes,title",
      operator: searchParams?.colorId ? "eqi" : "ne",
      value: searchParams?.colorId,
    },
    {
      fields: "sizes,attributes,title",
      operator: searchParams?.sizeId ? "eqi" : "ne",
      value: searchParams?.sizeId,
    },
  ]);
  const sizes = await getSizes();
  console.log('sizes: ', sizes);
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
            {/* Add mobile filters */}
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
