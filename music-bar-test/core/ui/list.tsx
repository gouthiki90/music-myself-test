import React from "react";

interface IList<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  className?: string;
}

export const List = <T extends {}>(props: IList<T>) => {
  return (
    <ul className={props.className}>{props.items.map(props.renderItem)}</ul>
  );
};
