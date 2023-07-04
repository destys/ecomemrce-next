import getProducts from "@/actions/getProducts";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

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
  ]);

  return (
    <div>
      <Container>
        <ProductList title="Product List" items={products} />
      </Container>
    </div>
  );
};

export default Category;
