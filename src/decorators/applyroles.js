import React, { Component, useState } from "react";
export default function applyroles() {
    return function (Child) {

 

        return class extends Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <div>
                       {false ? (
                         <Child /> 
                       ) : (
                        // <h2>Hello this is the navigation bar</h2>
            
                        <button type="button" onClick={()=> console.log('hola')}>Click Me!</button>
                       )}
                    </div>
                )
            }
        }
    }
}