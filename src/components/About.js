import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";//destructuring

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor")
};

componentDidMount(){
    console.log("parent componentDidMount");
}

//agr child ke ander did mount kra h to 
// parent constructor
// parent render
// childconstructor
// childrender
// childdidmount
//but agr parent me bhi kr diya to 
// parent constructor
// parent render
// child constructor
// chold render
// child didmount
// parentdid mount

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