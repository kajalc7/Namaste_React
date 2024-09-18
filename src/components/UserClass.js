import React from 'react';

class  UserClass extends React.Component {
    constructor(props){
        super(props);

        console.log(props)
    }

    render(){
        return (
            <div className="User">
                <h2>Name:{this.props.Name}</h2>
                <h3>Location:{this.props.Location}</h3>
                <h4>Contact:Kajalchaudhary@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;