import React from "react";
import { connect } from "react-redux";
import { increaseFoodPoints, decrementItem, updateAvaibleOperations, Operation } from "../../shared/store/actions";
import { StoreState } from "../../shared/store/reducers";
import { ALL_OPERATIONS as operationsData, OperationData } from "../../shared/db";

interface AppProps {
  increaseFoodPoints: Function;
  decrementItem: Function;
  updateAvaibleOperations: Function;
  avaibleOperations: Operation[];
}
class _App extends React.Component<AppProps> {
  getOperationNameById = (id: number): string => {
    const operation = operationsData.find(item => item.id === id);
    if (operation) {
      return operation.name;
    }
    return "";
  };

  getOperationDataById = (id: number): OperationData | null => {
    const operation = operationsData.find(item => item.id === id);
    if (operation) {
      return operation;
    }
    return null;
  };

  onClickHandle = (id: number, enable: boolean) => {
    const options = this.getOperationDataById(id);

    if (options && enable) {
      const { onProcess, requiredItems } = options;

      if (onProcess.increaseFoodPoints) {
        this.props.increaseFoodPoints(onProcess.increaseFoodPoints);
      }

      requiredItems.forEach(({ id, amount }) => {
        this.props.decrementItem(id, amount);
      });

      this.props.updateAvaibleOperations();
    }
  };

  render() {
    if (!this.props.avaibleOperations) {
      return null;
    }
    return (
      <div>
        <h3>Action Board</h3>
        {this.props.avaibleOperations.map(({id, enable} )=> {
          return (
            <button disabled={!enable} key={id} onClick={() => this.onClickHandle(id, enable)}>
              {this.getOperationNameById(id)}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ avaibleOperations }: StoreState): { avaibleOperations: Operation[] } => {
  return { avaibleOperations: avaibleOperations };
};

export const OperationsBoardContainer = connect(
  mapStateToProps,
  { increaseFoodPoints, decrementItem, updateAvaibleOperations }
)(_App);
