import type { StateCreator } from "zustand";

type ItemState = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
};

type ItemActions = {
  toggleComplete: () => void;
  addItem: (item: ItemState) => void;
  deleteItem: (id: string) => void;
};
