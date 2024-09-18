import { useState } from "react";
const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="User">
            <h1>Count1: {count} </h1>
            <h1>Count2: {count2} </h1>
            <h2>Name:{props.Name}</h2>
            <h3>Location:pune</h3>
            <h4>Contact:Kajalchaudhary@gmail.com</h4>
        </div>
    )
}
export default User;