import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react"; // Destructuring
import UserContext from "../utils/UserContext";

//when u import usercontext in class based component react gices u super power of consumer

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent constructor")
    }

    componentDidMount() {
        // console.log("parent componentDidMount");
    }

    render() {
        // console.log("Parent render")
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-gray-200 rounded-lg shadow-lg p-6 max-w-md w-full">
                    <h2 className="text-xl font-semibold mb-4 text-center">About Me</h2>
                    <UserClass Name={"Kajal Chaudhary"} Location={"Pune"} />
                    <h3>LoggedInUser :
                    <UserContext.Consumer>
                        { ({loggedInUser})=> <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer></h3>
                </div>
            </div>
        );
    }
}

export default About;
