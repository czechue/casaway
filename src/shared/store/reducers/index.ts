import { combineReducers } from "redux";
import { PlayerStats, Item, Operation } from "../actions";
import { playerStatsReducer } from "./stats";
import { itemsReducer } from "./items";
import { clickableReducer, clicksReducer } from "./clicks";
import { operationsReducer } from "./operations";

export interface StoreState {
  stats: PlayerStats;
  itemsToShow: Item[];
  itemsClickable: number[];
  avaibleOperations: Operation[];
  clicks: number;
}

export const reducers = combineReducers<StoreState>({
  stats: playerStatsReducer,
  itemsToShow: itemsReducer,
  itemsClickable: clickableReducer,
  clicks: clicksReducer,
  avaibleOperations: operationsReducer
});
