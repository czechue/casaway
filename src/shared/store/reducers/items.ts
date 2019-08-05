import { PlayerItem } from "../actions/items";
import { ActionTypes, PlayerItemsAction } from "../actions";

const INITIAL_STATE = [
  {
    id: 0,
    name: "wood",
    amount: 0
  },
  {
    id: 1,
    name: "stone",
    amount: 0
  }
];
export const playerItemsReducer = (
  state: PlayerItem[] = INITIAL_STATE,
  action: PlayerItemsAction
) => {
  switch (action.type) {
    case ActionTypes.getPlayerItems:
      return state;
    default:
      return state;
  }
};
