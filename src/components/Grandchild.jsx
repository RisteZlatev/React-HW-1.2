import React from "react";

const GrandChild = ({name, hobby}) => {
    return (
        <div className="grandchild">
            <p>
                <strong>{name}</strong> - Hobby: {hobby}
            </p>
        </div>
    )
}

export default GrandChild;