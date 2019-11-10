import React, { Component } from 'react';
import applyroles from '../decorators/applyroles';


// const Menu: React.FunctionComponent = () =>{

// return (

//     <div>¡Menu!</div>

// )}
@applyroles()
class Menu extends Component {
    render() {
        return (
            <div>¡Menu!</div>
        )
    }
}

export default Menu;