import create from 'zustand';
import { devtools } from 'zustand/middleware';
interface ModalState {
  data: any[];
  handleLike: (a: any) => void;
  setData: (d: any) => void;
}
export const useHome = create<ModalState>()(
  devtools(set => ({
    data: [],
    handleLike: val => {},
    setData: d => {
      set({ data: d });
    },
  })),
);
