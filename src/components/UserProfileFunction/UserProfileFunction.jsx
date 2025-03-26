import React from "react";

function UserProfileFunction(props){
    return(
            <div className='infoCard'>
                <span className='info'>Name: {props.name}</span>
                <span className='info'>Age: {props.age}</span>
                <span className='info'>Hobby: {props.hobby}</span>
            </div>
    )
}