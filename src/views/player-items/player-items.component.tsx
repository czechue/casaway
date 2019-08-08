import React from "react";
import { Item } from "../../shared/store/actions";
import styles from "./player-items.module.scss";
import { StoreState } from "../../shared/store/reducers";
import { connect } from "react-redux";
import { getItemNameById } from "../../shared/utils/getItemNameById";

interface OwnProps {
  items: Item[];
}
class _App extends React.Component<OwnProps> {
  renderItems = (): (JSX.Element | null)[] => {
    const { items } = this.props;
    return items.map(item => {
      if (item.show) {
        return (
          <div key={item.id}>
            {getItemNameById(item.id)}: {item.amount}
          </div>
        );
      }
      return null;
    });
  };

  render() {
    return (
      <div className={styles.paddingLeft}>
        Items:
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = ({ itemsToShow }: StoreState): { items: Item[] } => {
  return { items: itemsToShow };
};

export const PlayerItemsComponent = connect(mapStateToProps)(_App);
