"use client";

import checkFalsy from "@/app/products/helpers/checkFalsy";
import { InputProps } from "@/app/products/types/inputProps.types";
import useUpdaiteQuery from "@/hooks/usQuery/useUpdaite/useUpdaiteQuery";
import { useFormContext } from "react-hook-form";

const InputButtom = ({
  item: { key: KeyInput, typeInput = "text" },
}: InputProps) => {
  // hooks
  const { register, watch } = useFormContext();
  const { updaiteDataQuery } = useUpdaiteQuery();

  // value
  const value = watch(KeyInput);

  // conditinal rendering

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updaiteDataQuery({ inputKey: KeyInput, value });
      }}
    >
      <input
        // onSubmit={() => )}
        type={typeInput}
        {...register(KeyInput, {
          setValueAs: (value) => checkFalsy(value),
        })}
        className="w-full outline-none rounded-b-md"
      />
    </form>
  );
};

export default InputButtom;
