import { cn } from "@/lib/utils";
import { DataImage as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface GalleyTabProps {
  data: ImageType;
}

const GalleryTab: React.FC<GalleyTabProps> = ({ data }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-m bg-gray-100">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={`${process.env.PUBLIC_URL}${data?.attributes?.url}`}
              alt="Image"
              className="object-contain mix-blend-darken"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
