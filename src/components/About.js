import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";//destructuring

class About extends Component {
    constructor(props) {
        super(props);
       // console.log("Parent constructor")
};

componentDidMount(){
    //console.log("parent componentDidMount");
}

render() {
 //console.log("Parent render")
    return(
        <div>  
            <UserClass Name={"kajal chaudhary class"} Location ={"Pune function"}/>
        </div>
        );
    }
}

   
export default About