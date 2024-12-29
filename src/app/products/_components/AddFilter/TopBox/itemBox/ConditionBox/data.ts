import { KeyConditionsValue } from "@/app/products/types/inputProps.types";

interface PtypeData {
  Key: KeyConditionsValue;
  name: "یا" | "و" | "نباشد";
}

export const data: PtypeData[] = [
  {
    Key: "op",
    name: "یا",
  },
  {
    Key: "re",
    name: "و",
  },
  {
    Key: "remove",
    name: "نباشد",
  },
];
export default data;
