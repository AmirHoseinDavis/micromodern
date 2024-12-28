"use client";

import { FormProvider, useForm } from "react-hook-form";
import BottomBox from "../AddFilter/ButtomBox/BottomBox";
import ProviderData from "../ShowData/ProviderData";
import { searchParamsType } from "../../types/searchParams.types";
import TopBox from "../AddFilter/TopBox/TopBox";
import useUpdaiteQuery from "@/hooks/usQuery/useUpdaite/useUpdaiteQuery";

const ProductTemplate = ({ searchParams: searchparams }: searchParamsType) => {
  // hooks  and data
  const { getQuery } = useUpdaiteQuery();
  const defultValue = getQuery();
  const method = useForm({
    defaultValues: defultValue,
  });
  // console.log(method.watch());

  return (
    <FormProvider {...method}>
      <TopBox />
      <BottomBox />
      <ProviderData searchParams={searchparams} />
    </FormProvider>
  );
};

export default ProductTemplate;
