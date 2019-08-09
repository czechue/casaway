import React from "react";
import { connect } from "react-redux";
import { increaseFoodPoints, decrementItem, Operation } from "../../shared/store/actions";
import { StoreState } from "../../shared/store/reducers";

interface AppProps {
  increaseFoodPoints: Function;
  decrementItem: Function;
  operations: Operation[];
}
class _App extends React.Component<AppProps> {
  onEat10Blueberries = () => {
    this.props.increaseFoodPoints(5);
    this.props.decrementItem(3, 10);
  };

  render() {
    return (
      <div>
        <h3>Action Board</h3>
        <button onClick={() => this.onEat10Blueberries()}>Eat 10 Blueberries</button>
      </div>
    );
  }
}

const mapStateToProps = ({ avaibleOperations }: StoreState): { operations: Operation[] } => {
  return { operations: avaibleOperations };
};

export const OperationsBoardContainer = connect(
  mapStateToProps,
  { increaseFoodPoints, decrementItem }
)(_App);
