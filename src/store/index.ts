import { create } from "zustand";
import { dialogSlice } from "./dialog-slice";
import { itemSlice } from "./item-slice";
import type { Store } from "@/types";

export const useStore = create<Store>()((...a) => ({
  ...dialogSlice(...a),
  ...itemSlice(...a),
}));
