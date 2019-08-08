import { combineReducers } from "redux";
import { PlayerStats, Item } from "../actions";
import { playerStatsReducer } from "./stats";
import { itemsReducer } from "./items";
import {clickableReducer, clicksReducer} from "./clicks";

export interface StoreState {
  stats: PlayerStats;
  itemsToShow: Item[];
  itemsClickable: number[];
  clicks: number;
}

export const reducers = combineReducers<StoreState>({
  stats: playerStatsReducer,
  itemsToShow: itemsReducer,
  itemsClickable: clickableReducer,
  clicks: clicksReducer
});
