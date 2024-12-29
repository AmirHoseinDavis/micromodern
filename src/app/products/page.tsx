import axios from "axios";
import { searchParamsType } from "./types/searchParams.types";
import ProductTemplate from "./_components/template/ProductTemplate";
import { env } from "process";

const page = async ({ searchParams }: searchParamsType) => {


  const data = await axios.get(`${env.NEXT_PUBLIC_BASE_URL}/api/server`, {
    params: {
      ...searchParams
    }

  })

  console.log();
  





  return (
    <div className="flex items-start justify-center">
      <div>
        <ProductTemplate data={data?.data} />
      </div>
    </div>
  );
};

export default page;
