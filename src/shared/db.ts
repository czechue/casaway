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

export interface OperationData {
  id: number;
  name: string;
  requiredItems: RequiredItem[];
  onProcess: {
    increaseFoodPoints?: number;
  }
}
interface RequiredItem {
  id: number;
  amount: number;
}
export const ALL_OPERATIONS: OperationData[] = [
  {
    id: 0,
    name: 'Eat Blueberries',
    requiredItems: [{id: 3, amount: 10}],
    onProcess: {increaseFoodPoints: 5}
  },
  {
    id: 1,
    name: 'Craft Stone Axe',
    requiredItems: [{id: 0, amount: 20}, {id: 1, amount: 10}],
    onProcess: {}
  },
  {
    id: 2,
    name: 'Craft Stone Pickaxe',
    requiredItems: [{id: 0, amount: 20}, {id: 1, amount: 10}],
    onProcess: {}
  },
];
