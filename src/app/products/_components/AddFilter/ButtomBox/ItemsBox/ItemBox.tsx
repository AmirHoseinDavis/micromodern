"use client";

import { useToggleInput } from "@/hooks/useToggleInput";
import InputButtom from "./InputButtom";
import { InputProps } from "@/app/products/types/inputProps.types";

const ItemBox = ({ item }: InputProps) => {
  const { setToggle, isOpen } = useToggleInput();

  return (
    <li onClick={() => setToggle(item.id)} key={item.id} className="relative">
      <div
        className="!p-4 rounded shadow-Me backdrop:shadow-Me hover:shadow-hover
        text-center cursor-pointer"
      >
        {item.title}
      </div>

      {isOpen == item.id && (
        <div
          className="bg-blue-300 h-fit p-1 pt-2 absolute
          w-[110%] z-10 flex flex-col justify-end rounded-b-md"
        >
          <InputButtom item={item} />
        </div>
      )}
    </li>
  );
};

export default ItemBox;
