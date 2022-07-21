import React from 'react';
import {Link  } from "react-router-dom";

class Menu extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Link to="/">Home</Link> &nbsp;&nbsp;
                <Link to="/services">Services</Link> &nbsp;&nbsp;
                <Link to="/contact">Contact</Link> &nbsp;&nbsp;
                <Link to="/help">Help</Link> &nbsp;&nbsp;
                {/* <a href='abcd.com'>Check</a> */}
            </div>
        );
    }
}
 
export default Menu;