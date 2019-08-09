import { ActionTypes, OperationsAction } from "../actions";
import { ALL_OPERATIONS as data } from "../../db";

const INITIAL_STATE_OPERATIONS = [
  { id: 0, enable: false },
  { id: 1, enable: false },
  { id: 2, enable: false }
];

export const operationsReducer = (state = INITIAL_STATE_OPERATIONS, action: OperationsAction) => {
  switch (action.type) {
    case ActionTypes.addNewOperation:
      return state;

    case ActionTypes.updateAvaibleOperations:
      const itemsAvaible = action.payload;
      return state.map(operation => {
        const operationDataArray = data.find(operationData => operationData.id === operation.id);
        if (operationDataArray) {
          const requiredItemsArray = operationDataArray.requiredItems;
          const condition = requiredItemsArray.every(reqItem => {
            const avaible = itemsAvaible.find(item => item.id === reqItem.id);
            return !!(avaible && avaible.amount >= reqItem.amount);
          });
          if (condition && !operation.enable) {
            return {
              ...operation,
              enable: true
            };
          } else if (!condition && operation.enable) {
            return {
              ...operation,
              enable: false
            };
          }
          console.log('here1')
          return operation;
        }
        console.log('here2')
        return operation;
      });

    default:
      return state;
  }
};
