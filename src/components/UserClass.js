import React from 'react';

class  UserClass extends React.Component {
    constructor(props) {
        super(props);
       //console.log("child constructor")
    }
    componentDidMount(){
        //console.log("child componentDidMount");

        //api call

    }

    render(){
        //destructure
        const {Name,Location}=this.props
       // console.log("child render")
        return (
            <div className="User">
                <h2>Name:{Name}</h2>
                <h3>Location:{Location}</h3>
                <h4>Contact:Kajalchaudhary@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;