import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default",
                avatar_url : "http://photo.com"
            }
        }
        console.log(this.props.name +"Child constructor called");
        
    }

    async componentDidMount(){
        console.log(this.props.name +"Child DidMount called");

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo : json,
        });
        
        
    }

    componentDidUpdate() {
        console.log("Did update");
        
    }

    componentWillUnmount(){
        console.log("Unmount");
        
    }

    render() {

        console.log(this.props.name +"Child render called");
        

        const {name, location, avatar_url} = this.state.userInfo;    // destructuring
        // const {count} = this.state;     // destructuring

        return (
            <div className="user-card">
            {/* <h1>Count = {count}</h1>
            <button onClick={() => {
                this.setState({
                    count : this.state.count + 1
                })
            }}>Increase the count</button> */}
            {/* <h2>{count2}</h2> */}
            <img width={200} src={avatar_url}></img>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>Contact : @radiantriddle</h4>
        </div>
        )
    }
}

export default UserClass;