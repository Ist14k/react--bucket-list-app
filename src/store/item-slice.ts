import type { StateCreator } from "zustand";

export const dummyItems = [
  {
    id: "1",
    title: "Buy groceries",
    description: "jjjjj",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Walk the dog",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Do laundry",
    completed: true,
    createdAt: new Date(),
  },
];

export type ItemType = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
};

type ItemState = {
  items: ItemType[];
};

type ItemActions = {
  addItem: (item: ItemType) => void;
  removeItem: (id: string) => void;
  toggleItem: (id: string) => void;
};

export type ItemSlice = ItemState & ItemActions;

const initialState: ItemState = {
  items: [...dummyItems],
};

export const itemSlice: StateCreator<ItemSlice, [], [], ItemSlice> = (set) => ({
  ...initialState,
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  toggleItem: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    })),
});
