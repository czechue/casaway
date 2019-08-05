import React from "react";
import { PlayerItem } from "../../shared/store/actions/items";

interface OwnProps {
  items: PlayerItem[];
}
export const PlayerItemsComponent: React.FC<OwnProps> = props => {
  const { items } = props;
  return (
    <div>
      Items:
      {items.map((item: PlayerItem) => {
        return (
          <div>
            {item.name} | {item.amount}
          </div>
        );
      })}
    </div>
  );
};
