import React, { useState } from "react";
import "./List"

const Todo = ({ title }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [Value, setValue] = useState(title)
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState()
    
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
    <div className="row" onDoubleClick={handleDivDubleClick}>
{
isEditing ?
<div className="column seven wide">
<div className="ui input fluid">
<input
onChange={handleInputOnChange}
onKeyDown={handleInputKeyDown}
autoFocus={true}
value={tempValue}
/>
</div>
</div> :
<>
<div className="column five wide">
<h1>{Value}</h1>
</div>
<div className="column two wide">
<button className="ui button circular icon green"><i className="white check icon"></i></button>
</div>
<div className="column two wide">
<button className="ui button circular icon red"><i className="white remove icon"></i></button>
</div>
</>
}
</div>
);
};
export default Todo;