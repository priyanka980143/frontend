import React, { Component } from 'react';

class StateClassComponentInReact extends Component {
    constructor(props) {
        super(props);
        this.state = { stateData: "State Value", counter: 0, status: false }
    }

   
    render() {
        if (this.state.status) {
            return (
                <>
                    <button onClick={() => { this.setState({ status: !this.state.status }) }}>Change Status </button>
                    inside true blog
                    <a href="https://codepen.io/kh3996/pen/pojXrBj" target='_black'>Login Registration</a>
                    <a href="https://codepen.io/fadzrinmadu/pen/LYWjvoK" target='_black'>Login Registration</a>
                    <a href="https://codepen.io/HastiJbr/pen/XWZXXEN" target='_black'>Login Registration</a>
                    {/* {this.state.status?<div>Loggedin</div>:<div>Loggedout</div>} */}
                </>
            );
        } else {
            return (
                <>
                    <button onClick={() => { this.setState({ status: !this.state.status }) }}>Change Status </button>
    
                    {/* {this.state.status?<div>Loggedin</div>:<div>Loggedout</div>} */}
                    
                    inside false blog
                    
    
                </>
            );
            
        }
    }
}

export default StateClassComponentInReact;