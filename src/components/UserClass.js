import React from 'react';

class  UserClass extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
        count: 0,
       }
    }
    

    render(){
        //destructure
        const {Name,Location}=this.props
        const {count}=this.state
        return (
            <div className="User">
                <h1>Count:{count}</h1>
                <h2>Name:{Name}</h2>
                <h3>Location:{Location}</h3>
                <h4>Contact:Kajalchaudhary@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;