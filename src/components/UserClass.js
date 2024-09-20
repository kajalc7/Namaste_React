import React from 'react';

class  UserClass extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        userInfo:{
            name: "defaultdummy",
            location: "defaultAddress",
            bio: "defaultBio",
            avatar_url:"https://dummy.com"

        }
    }
       console.log("child constructor")
    }
async componentDidMount(){
        console.log("child componentDidMount");

        //api call
        const data = await fetch("https://api.github.com/users/kajalc7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);


    }

    componentDidUpdate(){
        console.log("componentdid update called")
    }

    //child constructor
    //child render
    //child did mount
    //api call json print
    //child render json print
    //child didmount updated called
    render(){
        //destructure
       const{name,avatar_url, html_url,bio} = this.state.userInfo
       console.log("child render")
        return (
            <div className="User">
                <h2>Name:{name}</h2>
                <img src={avatar_url}/>
                <h3>Github Link:{html_url}</h3>
                <h4>Bio:{bio}</h4>
            </div>
        )
    }
}

export default UserClass;