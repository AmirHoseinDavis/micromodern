import { TypeDataInput } from "@/app/products/types/inputProps.types";

export type typeInputBoxTop = Omit<TypeDataInput, "id">;

export type typeItemInputBoxTop = {
  item: typeInputBoxTop;
};
