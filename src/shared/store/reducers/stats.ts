import {ActionTypes, PlayerStats, PlayerStatsAction} from "../actions";

export const playerStatsReducer = (
  state = {} as PlayerStats,
  action: PlayerStatsAction
) => {
  switch (action.type) {
    case ActionTypes.decreaseFoodPoints:
      return { ...state, foodPoints: state.foodPoints - action.payload};

    case ActionTypes.increaseFoodPoints:
      const addResult = state.foodPoints + action.payload;
      return { ...state, foodPoints: addResult > 100 ? 100 : addResult};

    default:
      return state;
  }
};
