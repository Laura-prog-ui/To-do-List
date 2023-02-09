import React from 'react';


const section = ({ children }) => {
    return (
        <div className="ui raised segment" style={{background: "#f2f2f2", padding: "20px", border: "1px solid blue"}}>
            {children}
            </div>
        
    )
}
export default section;