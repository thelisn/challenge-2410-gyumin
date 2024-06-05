import { create } from "zustand";

const useFeedStore = create((set) => ({
  data: [],
  renderData: [],
  isLoading: true,
  setData: (newData) => set({ data: newData }),
  setRenderData: (newData) => set({ renderData: newData }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

export default useFeedStore;
