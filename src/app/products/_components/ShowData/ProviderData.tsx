import React, { Suspense } from "react";
import DisplayData from "./DisplayData";
import { searchParamsType } from "../../types/searchParams.types";
const ProviderData = ({ searchParams }: searchParamsType) => {
  return (
    <Suspense
      key={(searchParams && (searchParams as unknown as string)).toString()}
    >
      <DisplayData searchParams={searchParams} />
    </Suspense>
  );
};

export default ProviderData;
