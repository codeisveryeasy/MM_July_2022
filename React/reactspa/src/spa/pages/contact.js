import React from 'react';

class Contact extends React.Component {
    state = { 
        name:"",
        email:""
     } 


    captureName=(event)=>{
        //console.log(event)
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    captureEmail=(event)=>{
        //console.log(event)
        console.log(event.target.value)
        this.setState({
            email: event.target.value
        })
    }

    sendInfo=()=>{
        let newUser = {
            name: this.state.name,
            email: this.state.email
        }

        console.log(newUser)
    }

    render() { 
        return (
            <div>
                <h1>Contact</h1>
                <p>He possesses excellent communication, technology and training skills summed up with proficiency in C & Embedded C, C++, OpenGL, WebGL, Unity3D, OpenCV, Java, J2ME, J2EE, Spring, Hibernate, Struts, Microservices, Android Studio, Angular, Google Analytics, Jquery, Javascript, HTML5, CSS3 & IoT.</p>
                <div>
                    <h3>Get in touch</h3>
                    <div>
                       <label>Name: </label>
                       <input type="text" onChange={this.captureName}></input>
                       <br></br>
                       <label>Email: </label>
                       <input type="text" onChange={this.captureEmail}></input>
                       <br></br>
                       <br></br>
                       <button onClick={this.sendInfo}>Send</button>
                    </div>
                  
                 
                </div>
            </div>
        );
    }
}
 
export default Contact;