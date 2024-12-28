import { KyesType } from "@/app/products/types/inputProps.types";

type typeDataForm = Partial<Record<KyesType, string>>;
interface PropsUpdaiteQuery {
  inputKey: KyesType;
  value: string;
}

export type { typeDataForm, PropsUpdaiteQuery };
