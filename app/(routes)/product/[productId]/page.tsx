import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import Container from "@/components/ui/Container";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Info from "@/components/Info";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  console.log('product: ', product);

  const suggestedProducts = await getProducts([
    {
      fields: "category,id",
      operator: "eq",
      value: product.data?.attributes?.category.data?.id,
    },
    {
      fields: "id",
      operator: "ne",
      value: product.data?.id,
    },
  ]);

  return (
    <div className=" bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={product.data.attributes.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px0 lg:mt-0">
              <Info data={product.data} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
