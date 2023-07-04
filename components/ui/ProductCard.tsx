"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import { Data } from "@/types";

import IconButton from "@/components/ui/IconButton";
import Currency from "@/components/ui/Currency";

interface ProductCardProps {
  data: Data;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image and Actions */}
      <div className="aspect-square rounded-xl relative bg-gray-100">
        <Image
          src={`${process.env.PUBLIC_URL}${data?.attributes?.images?.data[0]?.attributes.url}`}
          fill
          alt={data.attributes.title}
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="">
        <p className=" font-semibold text-lg">{data.attributes.title}</p>
        <p className=" text-sm text-gray-500">
          {data.attributes.category?.data?.attributes?.title}
        </p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.attributes.price} />
      </div>
    </div>
  );
};

export default ProductCard;
