"use client";

import { useToggleInput } from "@/hooks/useToggleInput";
import InputButtom from "./InputButtom";
import { InputProps } from "@/app/products/types/inputProps.types";

const ItemBox = ({ item }: InputProps) => {
  const { setToggle } = useToggleInput();

  return (
    <li onClick={() => setToggle(item.id)} key={item.id} className="relative">
      <div
        className="!p-4 rounded shadow-Me hover:shadow-hover
        text-center cursor-pointer"
      >
        {item.title}
      </div>
      <InputButtom item={item} />
    </li>
  );
};

export default ItemBox;
