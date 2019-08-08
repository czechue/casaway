import React from "react";
import { PlayerStatsComponent } from "./player-stats/player-stats.component";
import { PlayerItemsComponent } from "./player-items/player-items.component";
import styles from "./app.module.scss";
import { ClickableBoardComponent } from "./clickable-board/clickable-board.component";

export class App extends React.Component {
  render() {
    return (
      <>
        <div className={styles.displayFlex}>
          <PlayerStatsComponent />
          <PlayerItemsComponent />
        </div>
        <ClickableBoardComponent />
      </>
    );
  }
}
