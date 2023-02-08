import React from "react";
import Todo from "./Todo";

const List = ({list}) => {
  const renderedList = list.map((item) => <Todo title={item.title} />);
  return (
    <div className="ui grid center aligned">
      {renderedList}
    </div>
  );
};

export default List;