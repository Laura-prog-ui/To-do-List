import React from "react";
import Todo from "./Todo";


const List = ({ list, removeTodo, handleTodoClick, clearAll }) => {
  const renderedList = list.map((item, index) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodo={() => removeTodo(index)}
      handleTodoClick={() => handleTodoClick(index)}
    />
  ));
  return (
    <div
      className="ui grid center aligned todo-container"
      style={{
        border: "1px solid blue",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px 0px #ddd",
        display: "flex",
        height: "100%",
        width: "100%",
        background: "#f2f2f2",
      }}
    >
      <div className="row">
        <div className="column sixteen wide">
          <button className="ui button blue center" onClick={clearAll}>
            Vaciar Todo
          </button>
        </div>
      </div>
      {renderedList}
    </div>
  );
};

export default List;