import { preloadedState, renderWithRedux } from "../../shared/test/render-with-redux";
import { ClickableBoardContainer } from "../clickable-board/clickable-board.container";
import { OperationsBoardContainer } from "./operations-board.container";
import { fireEvent } from "@testing-library/dom";
import React from "react";

test("should enable Eat Blueberries action button when requirement amount 10 is achieved", () => {
  const state = {
    ...preloadedState,
    itemsToShow: [
      { id: 0, amount: 0, show: true },
      { id: 1, amount: 0, show: true },
      { id: 2, amount: 0, show: true },
      { id: 3, amount: 9, show: true }
    ]
  };
  const { getByTestId } = renderWithRedux(
    state,
    <>
      <ClickableBoardContainer />
      <OperationsBoardContainer />
    </>
  );

  expect(getByTestId("action-board-btn-0").hasAttribute("disabled")).toBe(true);
  fireEvent.click(getByTestId("clickable-btn-blueberries"));
  expect(getByTestId("action-board-btn-0").hasAttribute("disabled")).toBe(false);
});
