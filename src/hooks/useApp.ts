import create from 'zustand';
import { devtools } from 'zustand/middleware';
interface AppState {
  passStep: any;
  isSplash: boolean | undefined;
  intrest: any[];
  posts: any[];
  communities: any[];
  categorie: { name: string };
  query: string;
  post: any;
  setSplash: (by: boolean) => void;
  setQuery: (a: string) => void;
  setIntrest: (payload: any) => void;
  setCommunities: (payload: any) => void;
  setStepPass: (by: any) => void;
  setCategorie: (by: string) => void;
  tabActive: string;
  setTab: (s: string) => void;
  setpost: (a: any) => void;
  filterChoosed: any;
  setFilterChoosed: (val: any) => void;
  setPosts: (a: any[]) => void;
}
export const useApp = create<AppState>()(
  devtools((set, get) => ({
    isSplash: false,
    passStep: 1,
    post: undefined,
    posts: [],
    query: '',
    categorie: { name: 'Communities' },
    intrest: [],
    communities: [],
    tabActive: 'Feed',
    filterChoosed: undefined,
    setFilterChoosed: (val: string) => {
      set({ filterChoosed: val });
    },
    setTab: (val: string) => {
      set({ tabActive: val });
    },
    setPosts: (val: any) => {
      set({ posts: val });
    },
    setpost: (val: any) => {
      set({ post: val });
    },
    setSplash: (val: boolean) => {
      set({ isSplash: val });
    },
    setQuery: (val: string) => {
      set({ query: val });
    },
    setStepPass: (val: any) => {
      set({ passStep: val });
    },
    setCategorie: (val: any) => {
      set({ categorie: val });
    },

    setIntrest(payload) {
      console.log('payloead', payload);
      let Intrest: any = [...get().intrest];
      const itemExists = Intrest.find((item: any) => item === payload);
      if (itemExists) {
        const index: any = Intrest.findIndex((item: any) => item === payload);
        Intrest.splice(index, 1);
      } else {
        Intrest.push(payload);
      }
      set({ intrest: Intrest });
    },
    setCommunities(payload) {
      let Comm: any = [...get().communities];
      const itemExists = Comm.find((item: any) => item === payload);
      if (itemExists) {
        const index: any = Comm.findIndex((item: any) => item === payload);
        Comm.splice(index, 1);
      } else {
        Comm.push(payload);
      }
      set({ communities: Comm });
    },
  })),
);
