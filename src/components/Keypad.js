// Code Keypad Component Here
import React, { Component } from "react";

class Keypad extends Component {


    render(){
        return (<div>
            <form>
            <input type='password' onKeyUp={e => console.log(`Entering password...`)}/>
            </form>
            <button>click</button>
            </div>)
    }
}

export default Keypad