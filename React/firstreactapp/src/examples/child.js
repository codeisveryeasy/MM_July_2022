import React from 'react';
import Message from './message';

class Child extends React.Component {
    state = {}

    score = 88

    welcome=()=>{
        return (
            <p>Hello, {this.props.name}</p>
        )
    }

    render() {
        return (
            <div>

                <p style={{color:"red"}}>
                    {this.props.name}  { }
                    {this.props.age} { }
                    from {this.props.children}
                </p>
                <div style={{color:"orange"}}>
                    Score: {this.score} <br></br>
                    Age: {this.props.age} <br></br>
                    <Message newname={this.props.name} newlikes={this.props.likes}></Message>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Child;