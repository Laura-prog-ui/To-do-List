import React, { useState } from "react";
import "./List";

const Todo = ({ title, completed, removeTodo, handleTodoClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [Value, setValue] = useState(title);
  const [tempValue, setTempValue] = useState(title);

  const handleDivDubleClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    const key = e.keyCode;
    if (key === 13) {
      setValue(tempValue);
      setIsEditing(false);
    } else if (key === 27) {
      setTempValue(Value);
      setIsEditing(false);
    }
  };

  const handleInputOnChange = (e) => {
    setTempValue(e.target.value);
  };

  return (
    <div
  className="row"
  onDoubleClick={handleDivDubleClick}
  style={{
    border: "1px solid blue",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px 0px #ddd",
    display: "flex",
    
    height: "100%",
    width: "100%",
    background: "#f2f2f2"
  }}
>

      {isEditing ? (
        <div className="column seven wide">
          <div className="ui input fluid">
            <input
              onChange={handleInputOnChange}
              onKeyDown={handleInputKeyDown}
              autoFocus={true}
              value={tempValue}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="column five wide">
            <h1>{Value}</h1>
          </div>
          <div className="column two wide">
            <button
              className={`ui button circular icon ${
                completed ? "grey" : "green"
              }`}
              onClick={handleTodoClick}
            >
              <i
                className={`${
                  completed ? "check" : "plus"
                } icon white`}
              />
            </button>
          </div>
          <div className="column two wide">
            <button className="ui button circular icon red" onClick={removeTodo}>
              <i className="trash icon white" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
