import { create } from "zustand";
import { dialogSlice } from "./dialog-slice";
import type { Store } from "@/types";

export const useStore = create<Store>((...a) => ({
  ...dialogSlice(...a),
}));
