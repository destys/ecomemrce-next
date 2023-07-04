import { MainData } from "@/types";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  title: string;
  items: MainData;
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  console.log('items: ', items);
  
  return (
    <div className=" space-y-4">
      <h3 className=" font-bold text-3xl">{title}</h3>
      {items.data.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.data?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
