import {ALL_ITEMS} from "../db";

export const getItemNameById = (id: number): string | null => {
  const item = ALL_ITEMS.find(item => item.id === id);
  if (item) {
    return item.name;
  }
  return null;
};
