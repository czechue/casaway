import React from "react";
import { StoreState } from "../../shared/store/reducers";
import { PlayerStats } from "../../shared/store/actions";
import { connect } from "react-redux";

interface OwnProps {
  stats: { healthPoints: number; foodPoints: number };
}

class _App extends React.Component<OwnProps> {
  render() {
    return (
      <div data-role="player-stats">
        <p>
          Health points: <strong>{this.props.stats.healthPoints}</strong>
        </p>
        <p>
          Food points: <strong>{this.props.stats.foodPoints}</strong>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ stats }: StoreState): { stats: PlayerStats } => {
  return { stats };
};

export const PlayerStatsComponent = connect(mapStateToProps)(_App);
