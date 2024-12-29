/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormProvider, useForm } from "react-hook-form";
import BottomBox from "../AddFilter/ButtomBox/BottomBox";
import ProviderData from "../ShowData/ProviderData";
import TopBox from "../AddFilter/TopBox/TopBox";
import useUpdaiteQuery from "@/hooks/usQuery/useUpdaite/useUpdaiteQuery";
import { AxiosResponse } from "axios";

const ProductTemplate = ({ data }: { data: AxiosResponse<any, any> }) => {
  // hooks  and data
  const { getQuery } = useUpdaiteQuery();
  const defultValue = getQuery();
  const method = useForm({
    defaultValues: defultValue,
  });



  return (
    <FormProvider {...method}>
      <TopBox />
      <BottomBox />
      <ProviderData data={data} />
    </FormProvider>
  );
};

export default ProductTemplate;
