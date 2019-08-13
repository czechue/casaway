import { preloadedState, renderWithRedux } from "../../shared/test/render-with-redux";
import { PlayerStatsContainer } from "./player-stats.container";
import { ClickableBoardContainer } from "../clickable-board/clickable-board.container";
import { fireEvent } from "@testing-library/dom";
import React from "react";

test("should decrement food points by 1 after 10 click", () => {
  const state = {
    ...preloadedState,
    clicks: 9,
    stats: {
      healthPoints: 100,
      foodPoints: 100
    }
  };
  const { getByTestId } = renderWithRedux(
    state,
    <>
      <PlayerStatsContainer />
      <ClickableBoardContainer />
    </>
  );

  fireEvent.click(getByTestId("clickable-btn-wood"));

  expect(getByTestId("player-stats-food").textContent).toBe("Food points: 99");
});
