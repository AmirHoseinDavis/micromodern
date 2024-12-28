import { TypeDataInput } from "../../../types/inputProps.types";

export const data: TypeDataInput[] = [
  {
    id: 1,
    title: "نام",
    key: "name",
    typeInput: "text",
  },
  {
    id: 2,
    title: "حده اقل قیمت",
    key: "minPrice",
    typeInput: "number",
  },
  {
    id: 3,
    title: "حده اکثر قیمت",
    key: "maxPrice",
    typeInput: "number",
  },

  {
    id: 4,
    title: "حده اقل موجوودی",
    key: "minStock",
    typeInput: "number",
  },
  {
    id: 5,
    title: "حده اکثر موجوودی",
    key: "maxStock",
    typeInput: "number",
  },
];
