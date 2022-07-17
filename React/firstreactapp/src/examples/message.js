import React from 'react';
import Rainbow from './rainbow';

class Message extends React.Component {
    state = {
        likes:  parseInt(this.props.newlikes)
    }

    rainbowStyle = {
        color:"blue",
        fontSize:"31px",
        border:"1px solid pink",
        borderRadius:"10px",
        textShadow:"1px 1px lightblue"

    }

    welcome = () => {
        return (
            <p style={{ color: "green", fontSize: "26px" }}>Hello, {this.props.newname}</p>
        )
    }

    // welcome = function () {
    //     return (
    //         <p>Hello, {this.props.newname}</p>
    //     )
    // }

    addLikes=()=>{
        console.log("addLikes called....")
        //change value of state
        //this.state.likes = this.state.likes + 1
        this.setState({likes: this.state.likes + 1})
    }

    render() {
        return (
            <div>
                <span>
                    {this.welcome()}
                </span>
                <div style={this.rainbowStyle}>
                    Rainbow
                </div>
                <div style={{fontSize:"40px"}}>
                    <Rainbow alphabetcolor="red">O</Rainbow>
                    <Rainbow alphabetcolor="green">B</Rainbow>
                    <Rainbow alphabetcolor="purple">B</Rainbow>
                    <Rainbow alphabetcolor="pink">O</Rainbow>
                    <div>
                        <button onClick={this.addLikes}>Like</button> {this.state.likes}
                    </div>

                </div>
            </div>

        );
    }
}

export default Message;