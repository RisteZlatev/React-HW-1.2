import React from "react";
import GrandChild from "./Grandchild";

const Child = ({name, age, grandchildren}) => {
    return (
        <div className="child">
            <h3>{name} (Age: {age})</h3>
            <div className="grandchildren">
                {grandchildren.map((grandchild, index)=>(
                    <GrandChild key={index} name={grandchild.name} 
                    hobby={grandchild.hobby}/>
                ))}
            </div>
        </div>
    )
}

export default Child;