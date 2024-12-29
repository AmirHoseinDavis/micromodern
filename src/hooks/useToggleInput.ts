import { create } from "zustand";

interface Props {
  isOpen: number | null;
  setToggle: (value: number|null) => void;
}

export const useToggleInput = create<Props>((set) => ({
  isOpen: null,
  setToggle: (newValue) => set(() => ({ isOpen: newValue })),
}));
