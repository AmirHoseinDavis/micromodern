"use client";

import { InputProps } from "@/app/products/types/inputProps.types";
import { useToggleInput } from "@/hooks/useToggleInput";
import useUpdaiteQuery from "@/hooks/usQuery/useUpdaite/useUpdaiteQuery";
import { useFormContext } from "react-hook-form";

const InputButtom = ({
  item: { key: KeyInput, typeInput = "text" },
}: InputProps) => {
  // hooks
  const { register, watch, } = useFormContext();
  const { updaiteDataQuery } = useUpdaiteQuery();
  const { setToggle } = useToggleInput()

  // value
  const value = watch(KeyInput);


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updaiteDataQuery({ inputKey: KeyInput, value });
        setToggle(null)
      }}
    >
      <input
        type={typeInput}
        {...register(KeyInput, {

          setValueAs: (value) => {
            return value

          }
        })}
        className="w-full outline-none rounded-b-md"
      />
    </form>
  );
};

export default InputButtom;
