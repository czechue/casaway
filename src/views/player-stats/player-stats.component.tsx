import React from "react";

interface OwnProps {
  stats: { healthPoints: number; foodPoints: number };
}

export const PlayerStatsComponent: React.FC<OwnProps> = ({
  stats
}): JSX.Element => {
  return (
    <div data-role="player-stats">
      <p>
        Health points: <strong>{stats.healthPoints}</strong>
      </p>
      <p>
        Food points: <strong>{stats.foodPoints}</strong>
      </p>
    </div>
  );
};
