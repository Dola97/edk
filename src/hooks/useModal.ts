import create from 'zustand';
import { devtools } from 'zustand/middleware';
interface ModalState {
  privacy: boolean | any;
  password: boolean | any;
  filter: boolean | any;
  post: boolean | any;
  profile: boolean | any;
  warn: boolean | any;
  drawer: boolean | any;
  setModal: (obj: { type: any; val: boolean }) => void;
}
export const useModal = create<ModalState>()(
  devtools(set => ({
    privacy: false,
    password: false,
    filter: false,
    post: false,
    warn: false,
    profile: false,
    drawer: false,
    setModal: val => {
      set(
        val.type === 'password'
          ? { password: val.val }
          : val.type === 'filter'
          ? { filter: val.val }
          : val.type === 'post'
          ? { post: val.val }
          : val.type === 'profile'
          ? { profile: val.val }
          : val.type === 'warn'
          ? { warn: val.val }
          : val.type === 'drawer'
          ? { drawer: val.val }
          : { privacy: val.val },
      );
    },
  })),
);
