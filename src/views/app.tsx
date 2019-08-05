import React from "react";
import { PlayerStats } from "../shared/store/actions";
import { connect } from "react-redux";
import { StoreState } from "../shared/store/reducers";
import { PlayerStatsComponent } from "./player-stats/player-stats.component";
import { PlayerItemsComponent } from "./player-items/player-items.component";
import styles from "./app.module.scss";
import { PlayerItem } from "../shared/store/actions/items";

interface AppProps {
  stats: PlayerStats;
  items: PlayerItem[];
}

class _App extends React.Component<AppProps> {
  render() {
    const { stats, items } = this.props;
    return (
      <div className={styles.displayFlex}>
        <PlayerStatsComponent stats={stats} />
        <PlayerItemsComponent items={items}/>
      </div>
    );
  }
}

const mapStateToProps = ({
  stats,
  items
}: StoreState): AppProps => {
  return { stats, items };
};

export const App = connect(mapStateToProps)(_App);
