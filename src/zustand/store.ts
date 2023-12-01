import { type } from 'os';
import create from 'zustand';

type Store = {
    count: number; //count type
  
  };
  type Action ={
    increment: () => void; //first func type
    decrement: () => void; //second func type
    reset: () => void; //reset func type
  }
  const initialState = {
    count: 0,
    
  }

  // create store
  const useStore = create<Store & Action>()((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })), //first func (increment)
    decrement: () => set((state) => ({ count: state.count - 1 })), //second func (decrement)
    reset: () => set(initialState), //second func (decrement)
  }));
  
  export default useStore;