import { ActionTypes, OperationsAction } from "../actions";

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
      const { itemsAvaible, operationsData } = action.payload;
      let updated = false;

      const newState = state.map(operation => {
        const operationDataArray = operationsData.find(
          operationData => operationData.id === operation.id
        );
        if (!operationDataArray) {
          return operation;
        }

        const requiredItemsArray = operationDataArray.requiredItems;
        const condition = requiredItemsArray.every(reqItem => {
          const avaible = itemsAvaible.find(item => item.id === reqItem.id);
          return !!(avaible && avaible.amount >= reqItem.amount);
        });

        if (condition && !operation.enable) {
          updated = true;
          return { ...operation, enable: true };
        } else if (!condition && operation.enable) {
          updated = true;
          return { ...operation, enable: false };
        }

        return operation;
      });

      return updated ? newState : state;

    default:
      return state;
  }
};
