import React from 'react';
import Child from './child';


class Parent extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <h1>I am Parent!</h1>
              
                <Child age="12" name="Jia" likes="22">Chennai</Child>
                <Child age="11" name="Kia" likes="18">Kuala Lumpur</Child>
                <Child age="10" name="Tia" likes="10">Penang</Child>
                <Child age="9" name="Nia" likes="40">Langkavi</Child>
               
            </div>

        );
    }
}

export default Parent;