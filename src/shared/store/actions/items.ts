import { ActionTypes } from "./types";

export interface PlayerItem {
  id: number;
  name: string;
  amount: number;
}
export interface GetPlayerItemsAction {
  type: ActionTypes.getPlayerItems
}
export const getPlayerItems = (): GetPlayerItemsAction => {
  return {
    type: ActionTypes.getPlayerItems
  };
};
