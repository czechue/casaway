import { ActionTypes } from "./types";
import { StoreState } from "../reducers";
import { Dispatch } from "redux";
import { Item } from "./items";
import { ALL_OPERATIONS as data, OperationData } from "../../db";

export interface Operation {
  id: number;
  enable: boolean;
}

export interface AddNewOperationAction {
  type: ActionTypes.addNewOperation;
  payload: number;
}

export const addNewOperation = (id: number) => {
  return {
    type: ActionTypes.addNewOperation,
    payload: id
  };
};

export interface UpdateAvaibleOperations {
  type: ActionTypes.updateAvaibleOperations;
  payload: { itemsAvaible: Item[]; operationsData: OperationData[] };
}

export const updateAvaibleOperations = () => {
  return (dispatch: Dispatch, getState: () => StoreState) => {
    dispatch<UpdateAvaibleOperations>({
      type: ActionTypes.updateAvaibleOperations,
      payload: { itemsAvaible: getState().itemsToShow, operationsData: data }
    });
  };
};
