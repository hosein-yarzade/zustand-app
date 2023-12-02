import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


type Store = {
    count: number; //count type
    totalCount: number; //totalCount type
  
};
  type Action ={
    increment: () => void; //first func type
    decrement: () => void; //second func type
    reset: () => void; //reset func type
  }
const initialState = {
    count: 0,
    totalCount:0
  }

const useBearStore = create<Store & Action>()(
  persist( // persist func zustand middleware 
    (set, get:any) => ({
      count: 0,
      totalCount:0,
      increment: () => set({ count: get().count + 1 ,totalCount: get().totalCount +1 }),
      decrement: () => set({ count: get().count - 1 ,totalCount: get().totalCount +1}),
      reset: () => set(initialState),
    }),
    {
      name: 'count-storage',  // name persist store
      storage: createJSONStorage(() => sessionStorage), // type storage
    },
  ),
)
export default useBearStore;