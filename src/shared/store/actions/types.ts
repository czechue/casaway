import { DecreaseFoodPointsAction } from "./stats";
import { IncrementItemAction } from "./items";
import {IncrementClicksCounterAction, ResetClicksCounterAction, ToggleItemClickableAction} from "./clicks";

export enum ActionTypes {
  decreaseFoodPoints,
  incrementItem,
  toggleItemClickable,
  incrementClicksCounter,
  resetClicksCounter
}

export type PlayerStatsAction = DecreaseFoodPointsAction;
export type ItemsAction = IncrementItemAction;
export type ItemsClickableAction = ToggleItemClickableAction;
export type ClicksCounterAction = IncrementClicksCounterAction | ResetClicksCounterAction;
