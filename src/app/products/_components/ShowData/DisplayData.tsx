/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosResponse } from "axios";
import { Key } from "react";

const DisplayData = async ({ data }: { data: AxiosResponse<any, any> }) => {

  // console.log(data?.data.map((item) => item.name));



  return <div>

    <ul className="space-y-[1vh]">
      {data?.data?.map((item: any) => (
        <li key={item.id} className="shadow-Me grid grid-cols-3">

          <p>
            {item?.name}
          </p>
          <p className="text-center">
            {item.price}
          </p>
          <p className="text-end">
            {item.stock}
          </p>

        </li>
      ))}
    </ul>
  </div>;
};

export default DisplayData;
