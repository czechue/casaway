import React from "react";

import {  fireEvent } from "@testing-library/react";
import { PlayerStatsContainer } from "../player-stats/player-stats.container";
import { ClickableBoardContainer } from "../clickable-board/clickable-board.container";

import {preloadedState, renderWithRedux} from "../../shared/test/render-with-redux";

test("should decrement food points by 1 after 10 click", () => {
  const state = {
    ...preloadedState,
    clicks: 9,
    stats: {
      ...preloadedState.stats,
      foodPoints: 100
    }
  };
  const { getByTestId, getByText } = renderWithRedux(
    state,
    <>
      <PlayerStatsContainer />
      <ClickableBoardContainer />
    </>
  );

  fireEvent.click(getByText("wood"));

  expect(getByTestId("player-stats-food").textContent).toBe("Food points: 99");
});
