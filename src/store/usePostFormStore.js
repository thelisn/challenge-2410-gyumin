import { create } from "zustand";

const useFeedStore = create((set) => ({
  title: "",
  content: "",
  setTitle: (newTitle) => set({ title: newTitle }),
  setContent: (newContent) => set({ content: newContent }),
}));

export default useFeedStore;
