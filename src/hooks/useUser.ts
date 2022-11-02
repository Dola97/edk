import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface UserState {
  user:
    | {
        _id: undefined;
        name: undefined;
        email: undefined;
        role: [];
        interests: [];
      }
    | undefined;
  token: undefined;
  setUser: (obj: any) => void;
  setToken: (token: any) => void;
  choosedIntrest: boolean | undefined;
  setChoosedIntrest: (val: any) => void;
  logout: () => void;
}
export const useUser = create<UserState>()(
  persist(
    devtools(set => ({
      user: undefined,
      token: undefined,
      choosedIntrest: undefined,
      setUser: (val: any) => {
        set({ user: val });
      },
      setToken: (token: any) => {
        set({ token: token });
      },
      logout: () => {
        set({ token: undefined, user: undefined, choosedIntrest: undefined });
      },
      setChoosedIntrest: (val: any) => {
        set({ choosedIntrest: val });
      },
    })),
    {
      name: 'user-v1', // unique name
      getStorage: () => AsyncStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);
