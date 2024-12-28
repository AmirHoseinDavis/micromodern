"use client";

import checkFalsy from "@/app/products/helpers/checkFalsy";
import { InputProps } from "@/app/products/types/inputProps.types";
import { useToggleInput } from "@/hooks/useToggleInput";
import useUpdaiteQuery from "@/hooks/usQuery/useUpdaite/useUpdaiteQuery";
import { useFormContext } from "react-hook-form";

const InputButtom = ({
  item: { id, key: KeyInput, typeInput = "text" },
}: InputProps) => {
  // hooks
  const { isOpen } = useToggleInput();
  const { register, watch } = useFormContext();
  const { updaiteDataQuery } = useUpdaiteQuery();

  // value
  const value = watch(KeyInput);

  // conditinal rendering
  if (isOpen == id) {
    return (
      <div
        className="bg-blue-300 h-fit p-1 pt-2 absolute
        w-[110%] z-10 flex flex-col justify-end rounded-b-md"
      >
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
      </div>
    );
  }
};

export default InputButtom;
