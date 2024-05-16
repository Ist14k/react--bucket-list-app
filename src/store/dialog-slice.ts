import { StateCreator } from "zustand";

type DialogState = {
  isOpen: boolean;
};

type DialogActions = {
  openDialog: () => void;
  closeDialog: () => void;
};

export type DialogSlice = DialogState & DialogActions;

const initialState: DialogState = {
  isOpen: false,
};

export const dialogSlice: StateCreator<DialogSlice, [], [], DialogSlice> = (
  set,
) => ({
  ...initialState,
  openDialog: () => set(() => ({ isOpen: true })),
  closeDialog: () => set(() => ({ isOpen: false })),
});
