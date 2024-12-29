"use client";

import { useFormContext } from "react-hook-form";
import ItemBox from "./itemBox/ItemBox";
import changeDataofTopBox from "@/app/products/helpers/changeDataofTopBox/changeDataofTopBox";

const TopBox = () => {
  const { watch } = useFormContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = changeDataofTopBox({ item: watch() as any });
  // console.log(data);
  

  return (
    <div className="mb-10">
      <ul className="  border-2 border-gray-300 rounded-md p-2 spac1">
        {data.map((item) => (
          <ItemBox key={item.item.key} item={item.item} />
        ))}
      </ul>
    </div>
  );
};

export default TopBox;
