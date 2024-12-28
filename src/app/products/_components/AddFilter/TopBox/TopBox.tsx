"use client";

import { useFormContext } from "react-hook-form";
import ItemBox from "./itemBox/ItemBox";

const TopBox = () => {
  const { watch } = useFormContext();
  const data = Object.entries(watch());

  return (
    <div className="mb-10">
      <ul>
        {data.map((item) => (
          <ItemBox key={item[0]} />
        ))}
      </ul>
    </div>
  );
};

export default TopBox;
