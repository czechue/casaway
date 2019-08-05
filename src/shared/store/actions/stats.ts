import { ActionTypes } from "./types";

export interface PlayerStats {
  healthPoints: number;
  foodPoints: number;
}

export interface GetPlayerStatsAction {
  type: ActionTypes.getPlayerStats;
}

export const getPlayerStats = (): GetPlayerStatsAction => {
  return {
    type: ActionTypes.getPlayerStats
  };
};
