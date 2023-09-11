import { create } from 'zustand';
const useStore = create((set) => ({
    mode: 1,
    switchMode: () => set((state) => ({ mode: !state.mode }))
}));
export default useStore;
