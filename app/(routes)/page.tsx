import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/ProductList";

import BillBoard from "@/components/ui/BillBoard";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard(1);
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

export default HomePage;
