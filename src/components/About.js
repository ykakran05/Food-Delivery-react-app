import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);

        // console.log("Parent constructor called")
    }

    componentDidMount(){
        // console.log("Parent DidMount called");
        
    }

    render() {

        // console.log("Parent render called");
        
        return (
            <div>
                <h1>About</h1>
                <h2>This is About Yogesh</h2>
                {/* <User name={"Yogesh Kakran (function)"} location={"Chandigarh (function)"}/> */}
    
                <UserClass name={"Yogesh Kakran (Class)"} location={"Chandigarh (Class)"}/>
                {/* <UserClass name={"Elon Musk (Class)"} location={"US (Class)"}/> */}

            </div>
        )
    }
}

export default About;