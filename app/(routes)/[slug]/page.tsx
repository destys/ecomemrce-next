import getBillboard from "@/actions/getBillboard";
import getPage from "@/actions/getPage";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/ProductList";

import BillBoard from "@/components/ui/BillBoard";
import Container from "@/components/ui/Container";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<ProductPageProps> = async ({ params }) => {
  const page = await getPage(params.slug);
  const billboard = await getBillboard(page.data.attributes.billboards.data.id) || null;
  const products = await getProducts([
    {
      fields: "isFeatured",
      operator: "eq",
      value: "true",
    },
  ]);

  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <BillBoard data={billboard} />
        <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
