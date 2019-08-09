interface AllItems {
  id: number;
  name: string;
}

export const ALL_ITEMS: AllItems[] = [
  {
    id: 0,
    name: "wood"
  },
  {
    id: 1,
    name: "stone"
  },
  {
    id: 2,
    name: "coal"
  },
  {
    id: 3,
    name: "blueberries"
  }
];

interface AllOperation {
  id: number;
  name: string;
  requiredItems: RequiredItem[];
}
interface RequiredItem {
  id: number;
  amount: number;
}
export const ALL_OPERATIONS: AllOperation[] = [
  {
    id: 0,
    name: 'Eat Blueberries',
    requiredItems: [{id: 3, amount: 10}]
  },
  {
    id: 1,
    name: 'Craft Stone Axe',
    requiredItems: [{id: 0, amount: 20}, {id: 1, amount: 10}]
  },
];
