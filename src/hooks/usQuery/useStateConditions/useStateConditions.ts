import { create } from "zustand";
import { typeStateConditions } from "./types";

const useStateConditions = create<typeStateConditions>((set) => ({
  KeysValue: {
    maxPrice: "re",
    maxStock: "re",
    minPrice: "re",
    minStock: "re",
    name: "re",
  },

  setCondition: ({ conditionState, key }) =>
    set((state) => ({
      KeysValue: {
        [key]: conditionState,
        ...state.KeysValue,
      },
    })),
}));

export default useStateConditions;
