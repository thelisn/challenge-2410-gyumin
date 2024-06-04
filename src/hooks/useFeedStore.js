import { create } from "zustand";

const useFeedStore = create((set) => ({
  data: [],
  isLoading: true,
  setData: (newData) => set({ data: newData }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

export default useFeedStore;
