import React from 'react';
import axios from "axios";
import User from './user';

class Userlist extends React.Component {
    state = {
        count: 1,
        users: []
    }

    // componentWillMount(){
    //     console.log("Component will mount next/now!")
    //     console.log(new Date().getTime())
    //     //alert()
    // }

    // componentDidMount(){
    //     console.log("Component is already mounted!")
    //     console.log(new Date().getTime())
    // }

    // componentWillUpdate(){
    //     console.log("Component will update next/now!")
    //     console.log(new Date().getTime())
    // }

    // componentDidUpdate(){
    //     console.log("Component is already updated!")
    //     console.log(new Date().getTime())
    // }


    componentWillMount() {
        //callAPI function will use axios to make api call
        this.callAPI()
    }

    callAPI = () => {
        //axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("http://localhost:1234/get/category/all")
            .then((response) => {
                console.log(response)
                console.log(response.data)
                console.log(this.state.users)
                //assign response.data to users state
                this.setState({
                    users: response.data
                })
                console.log(this.state.users)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    renderUsers = () => {
        return this.state.users.map((comment) => {
            //console.log(comment)
            //console.log(comment.email)
            console.log(comment.name )
            return (
                <User key={comment._id}
                      name={comment.name}>
                </User>
            )

        })
    }


    render() {
        return (
            <div>
                <h2>list of users</h2>
                <button onClick={this.changeCount}>Click {this.state.count}</button>
                {new Date().getTime()}
                <br></br>
                <ol>
                    {this.renderUsers()}
                </ol>
                 
        
                
            </div>
        );
    }
}

export default Userlist;