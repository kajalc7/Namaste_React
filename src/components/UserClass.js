import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "defaultdummy",
                location: "defaultAddress",
                bio: "defaultBio",
                avatar_url: "https://dummy.com"
            }
        };
        console.log("child constructor");
    }

    async componentDidMount() {
        console.log("child componentDidMount");

        // API call
        const data = await fetch("https://api.github.com/users/kajalc7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate called");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }

    render() {
        // Destructure
        const { name, avatar_url, html_url, bio } = this.state.userInfo;
        console.log("child render");
        return (
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
                <img
                    src={avatar_url}
                    alt="User Avatar"
                    className="rounded-full w-32 h-32 mb-4"
                />
                <h2 className="text-2xl font-bold text-blue-600 mb-2">{name}</h2>
                <h3 className="text-lg text-gray-700 mb-2">
                    <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        GitHub Link
                    </a>
                </h3>
                <h4 className="text-sm text-gray-500">{bio}</h4>
            </div>
        );
    }
}

export default UserClass;
