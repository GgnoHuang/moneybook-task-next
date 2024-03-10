import { create } from "zustand"

export const useStore = create((set, get) => ({
  isMobileW: false,
  setIsMobileW: (state) => set({ isMobileW: state }),
}))

export default useStore
