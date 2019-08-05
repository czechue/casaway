import { combineReducers } from "redux";
import { PlayerStats } from "../actions";
import { playerStatsReducer } from "./stats";
import {PlayerItem} from "../actions/items";
import {playerItemsReducer} from "./items";

export interface StoreState {
  stats: PlayerStats;
  items: PlayerItem[];
}

export const reducers = combineReducers<StoreState>({
  stats: playerStatsReducer,
  items: playerItemsReducer
});
