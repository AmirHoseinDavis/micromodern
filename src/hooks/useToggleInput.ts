import { create } from "zustand";

interface Props {
  isOpen: number | null;
  setToggle: (value: number) => void;
}

export const useToggleInput = create<Props>((set) => ({
  isOpen: null,
  setToggle: (newValue: number) => set(() => ({ isOpen: newValue })),
}));
