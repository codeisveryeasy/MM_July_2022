import React from 'react';
import { Routes, Route } from "react-router-dom";
import Contact from './pages/contact';
import Help from './pages/help';
import Home from './pages/home';
import Services from './pages/services';

class Content extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/services' element={<Services></Services>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                    <Route path='/help' element={<Help></Help>}></Route>

                </Routes>
            </div>
        );
    }
}
 
export default Content;