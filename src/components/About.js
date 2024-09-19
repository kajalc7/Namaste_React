import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";//destructuring

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor")
};

//when it loads then in cosnole the order will be
//parent constructor
//parentrender
//child constructro
//child render
render() {
 console.log("Parent render")
    return(
        <div>
            <User Name={"kajal chaudhary function"}/>
            <UserClass Name={"kajal chaudhary class"} Location ={"Pune function"}/>
        </div>
        );
    }
}

   
export default About