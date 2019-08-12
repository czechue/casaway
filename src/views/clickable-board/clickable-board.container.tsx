import React from "react";
import {
  incrementItem,
  incrementClicksCounter,
  updateAvaibleOperations
} from "../../shared/store/actions";
import { connect } from "react-redux";
import { StoreState } from "../../shared/store/reducers";
import { getItemNameById } from "../../shared/utils/getItemNameById";

interface AppProps {
  incrementItem: Function;
  incrementClicksCounter: Function;
  updateAvaibleOperations: Function;
  items: number[];
}

const CLICKING_MULTIPLIER = 1;

class _App extends React.Component<AppProps> {
  handleOnClick = (itemId: number, multiplier: number): void => {
    this.props.incrementItem(itemId);
    this.props.incrementClicksCounter(multiplier);
    this.props.updateAvaibleOperations();
  };

  render() {
    return (
      <div>
        <h3>Clickable Area:</h3>
        {this.props.items.map(itemId => {
          const itemName = getItemNameById(itemId);
          return (
            <button
              key={itemId}
              onClick={() => this.handleOnClick(itemId, CLICKING_MULTIPLIER)}
            >
              {itemName}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ itemsClickable }: StoreState): { items: number[] } => {
  return { items: itemsClickable };
};

export const ClickableBoardContainer = connect(
  mapStateToProps,
  { incrementItem, incrementClicksCounter, updateAvaibleOperations }
)(_App);
