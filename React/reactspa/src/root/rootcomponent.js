import React from 'react';
import Content from '../spa/content';
import Menu from '../spa/menu';


class RootComponent extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Root component</h1>
                <Menu></Menu>
                <Content></Content>
            </div>
        );
    }
}
 
export default RootComponent;