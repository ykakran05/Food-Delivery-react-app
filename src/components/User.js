import { useState } from "react";

const User = ({name, location}) => {

    const [count, setCount] = useState(0);
    const [count2] = useState(1)
    return (
        <div className="user-card">
        <h1>Count = {count}</h1>
        <button onClick={() => setCount(count+2)}>Set Count to 2</button>
        <h2>{count2}</h2>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact : @radiantriddle</h4>
    
    </div>
    )
}

export default User;