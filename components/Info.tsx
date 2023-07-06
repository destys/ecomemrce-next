import { Data } from "@/types";
import Currency from "@/components/ui/Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Data;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        {data?.attributes?.title}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.attributes.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Sizes:</h3>
          <div>
            {data.attributes.sizes?.data?.map((size: any, index: number) =>
              data.attributes.sizes?.data.length !== index + 1
                ? size.attributes.title + ", "
                : size.attributes.title
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Colors:</h3>
          <div className="flex gap-x-5">
            {data.attributes.colors?.data?.map((color: any, index: number) => (
              <div
                key={color.attributes.title}
                className="h-6 w-6 rounded-full border border-gray-600"
                style={{ backgroundColor: color.attributes.title }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add to Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
