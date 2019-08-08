import { ActionTypes } from "./types";

export interface PlayerStats {
  healthPoints: number;
  foodPoints: number;
}

export interface DecreaseFoodPointsAction {
  type: ActionTypes.decreaseFoodPoints;
  payload: number;
}

export const decreaseFoodPoints = (points: number): DecreaseFoodPointsAction => {
  return {
    type: ActionTypes.decreaseFoodPoints,
    payload: points
  };
};
