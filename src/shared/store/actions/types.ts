// import { FetchTodosAction, DeleteTodoAction} from "./todos";
//
// export enum ActionTypes {
//   fetchTodos,
//   deleteTodo
// }
//
// export type Action = FetchTodosAction | DeleteTodoAction;

import { GetPlayerStatsAction } from "./stats";
import { GetPlayerItemsAction } from "./items";

export enum ActionTypes {
  getPlayerStats,
  getPlayerItems
}

export type PlayerStatsAction = GetPlayerStatsAction;
export type PlayerItemsAction = GetPlayerItemsAction;
