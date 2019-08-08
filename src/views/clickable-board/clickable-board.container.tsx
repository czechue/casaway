import React from "react";
import { incrementItem, incrementClicksCounter } from "../../shared/store/actions";
import { connect } from "react-redux";
import { StoreState } from "../../shared/store/reducers";
import { getItemNameById } from "../../shared/utils/getItemNameById";

interface AppProps {
  incrementItem: Function;
  incrementClicksCounter: Function;
  items: number[];
}

const CLICKING_MULTIPLIER = 1;

class _App extends React.Component<AppProps> {
  handleOnClick = (itemId: number, multiplier: number): void => {
    this.props.incrementItem(itemId);
    this.props.incrementClicksCounter(multiplier);
  };

  render() {
    return (
      <div>
        <h3>Clickable Area:</h3>
        {this.props.items.map(itemId => {
          return (
            <button key={itemId} onClick={() => this.handleOnClick(itemId, CLICKING_MULTIPLIER)}>
              {getItemNameById(itemId)}
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
  { incrementItem, incrementClicksCounter }
)(_App);
