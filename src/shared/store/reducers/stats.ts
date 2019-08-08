import {ActionTypes, PlayerStats, PlayerStatsAction} from "../actions";

const INITIAL_STATE = {
  healthPoints: 100,
  foodPoints: 100
};

export const playerStatsReducer = (
  state: PlayerStats = INITIAL_STATE,
  action: PlayerStatsAction
) => {
  switch (action.type) {
    case ActionTypes.decreaseFoodPoints:
      return { ...state, foodPoints: state.foodPoints - action.payload};
    default:
      return state;
  }
};
