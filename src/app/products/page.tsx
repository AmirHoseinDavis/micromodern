import ProductTemplate from "./_components/template/ProductTemplate";
import { searchParamsType } from "./types/searchParams.types";

const page = ({ searchParams }: searchParamsType) => {
  return (
    <div className="flex items-start justify-center">
      <div>
        <ProductTemplate searchParams={searchParams} />
      </div>
    </div>
  );
};

export default page;
