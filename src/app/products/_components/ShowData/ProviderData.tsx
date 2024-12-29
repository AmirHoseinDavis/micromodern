/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import DisplayData from "./DisplayData";
import { AxiosResponse } from "axios";
const ProviderData = ({ data }: { data: AxiosResponse<any, any> }) => {
  return (
    <Suspense
    // key={(searchParams && (searchParams as unknown as string)).toString()}
    >
      <div className="mt-[5vh] h-[30vh] overflow-y-auto border-2 border-gray-300 p-3">
        <DisplayData data={data} />
      </div>
    </Suspense>
  );
};

export default ProviderData;
