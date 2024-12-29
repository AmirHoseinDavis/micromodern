/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { typeItemInputBoxTop } from "./types";
import InputButtom from "../../ButtomBox/ItemsBox/InputButtom";
import ConditionBox from "./ConditionBox/ConditionBox";

const ItemBox = ({ item }: typeItemInputBoxTop) => {
  return (
    <div className="shadow-Me p-2 flex justify-between">
      {/*title and input  */}
      <div className="w-[20vw] border-l-2 border-gray-300 space-y-[1vh]">
        <div>{item.title}</div>
        <InputButtom item={{ ...item, id: 89 }} />
      </div>

      {/* setconditional */}
      <ConditionBox keyCondition={item.key as any} key={item.key} />
    </div>
  );
};

export default ItemBox;
