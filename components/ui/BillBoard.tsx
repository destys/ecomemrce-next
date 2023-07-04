import { MainDataSingle } from "@/types";

interface BillBoardProps {
  data: MainDataSingle;
}

const BillBoard: React.FC<BillBoardProps> = ({ data }) => {

  return (
    <div className=" p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden bg-cover">
      <div
        className=" rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
        style={{
          backgroundImage: `url(${process.env.STRAPI_PUBLIC_URL}${data?.data.attributes?.image.data?.attributes.url})`,
        }}
      >
        <div className=" h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className=" font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.data.attributes?.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
