import { create } from "zustand"

export const useStore = create((set, get) => ({
  isMobileW: false,
  setIsMobileW: (message) => set({ isMobileW: message }),
}))

export default useStore
