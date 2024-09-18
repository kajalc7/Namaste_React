import { useState } from "react";

const User = (props) => {
    // Correct useState initialization
    const [count, setCount] = useState(0);
    const [count2] = useState(1); // This state is static and won't change

    // Function to handle state update
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="User">
            <h1>Count1: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {props.Name}</h2>
            <h3>Location: {props.Location}</h3> {/* Changed to use prop */}
            <h4>Contact: Kajalchaudhary@gmail.com</h4>
            <button onClick={incrementCount}>Increment Count</button> {/* Button to update state */}
        </div>
    );
};

export default User;
