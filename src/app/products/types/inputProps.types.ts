export type KeyConditionsValue = "op" | "re" | "remove";

export type KyesType =
  | "minPrice"
  | "maxPrice"
  | "maxStock"
  | "minStock"
  | "name";

export interface TypeDataInput {
  id: number;
  title: string;
  key: KyesType;

  typeInput?: "number" | "text";
}

export interface InputProps {
  item: TypeDataInput;
}
