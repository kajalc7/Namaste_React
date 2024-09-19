import React from 'react';

class  UserClass extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
        count: 0,
        count2: 1,
       };
       console.log("child constructor")
    }
    

    render(){
        //destructure
        const {Name,Location}=this.props
        const {count,count2}=this.state
        console.log("child render")
        return (
            <div className="User">
                <h1>Count1:{count}</h1>
                <h1>Count2: {count2} </h1>
                <h2>Name:{Name}</h2>
                <h3>Location:{Location}</h3>
                <h4>Contact:Kajalchaudhary@gmail.com</h4>
                <button onClick={()=>{
                    //never update state variable directly like this.state.count=this.state.count+1
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,//on button click both count will be increasing
                        }
                    )
                }}
                >Increment Count</button> {/* Button to update state */}
            </div>
        )
    }
}

export default UserClass;