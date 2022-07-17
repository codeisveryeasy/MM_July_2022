import React from 'react';
import Parent from '../examples/parent';

class RootComponent extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>I am Root component!!!!</h1>
               <Parent></Parent>
               
            </div>
        );
    }
}
 
export default RootComponent;
