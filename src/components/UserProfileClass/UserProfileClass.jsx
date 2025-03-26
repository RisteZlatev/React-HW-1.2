import './UserProfileClass.css';
import React, {Component} from "react";

class UserProfileClass extends Component{
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         name: props.name,
    //         age: props.age,
    //         hobby: props.hobby,
    //     }
    // };
    //prasanje zosto vaka ne raboti?

    render(){
        return(
            <div className='infoCard'>
                <span className='info'>Name: {this.props.name}</span>
                <span className='info'>Age: {this.props.age}</span>
                <span className='info'>Hobby: {this.props.hobby}</span>
            </div>
        )
    }

}

export default UserProfileClass;