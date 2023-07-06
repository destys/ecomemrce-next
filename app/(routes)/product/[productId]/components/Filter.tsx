"use client";

import { MainData } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  valueKey: any;
  name: string;
  data: MainData;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);
  return <div>Filter</div>;
};

export default Filter;
