import React, { Component } from 'react';

class StateClassComponentInReact extends Component {
    constructor() {
        super();
        this.state = { stateData: "State Value", counter: 0, status: false }
        this.btnClickMethodInClass = this.btnClickMethodInClass.bind(this)
    }

    dataMember = "Data Member inside class"
    btnClickMethodInClassArrow = () => {
        console.log("called btnClickMethodInClassArrow");
        console.log(this.dataMember);
        // return
        this.dataMember = "Something"
        this.setState({ stateData: "data" })
    }
    btnClickMethodInClass() {
        console.log("called btnClickMethodInClass");
        // console.log(data);
        // console.log(this.data);
        console.log(this.dataMember);
        // return
    }
    render() {
        let data = "Data inside render value"
        let btnClickHandle = () => {
            console.log("called");
            // return
        }
        return (
            <>
                <h3>btn click</h3>
                {/* <button onClick={btnClickHandle()}>Click me</button> */}
                <button onClick={btnClickHandle}>Click me</button> <br />
                <button onClick={this.btnClickMethodInClass}>Click me method as class properties</button><br />
                <button onClick={this.btnClickMethodInClassArrow}>Click me class arrow function</button><br />

                <p>Variable inside render : {data}</p>
                <p>Datamember from Class : {this.dataMember}</p>
                <p>State from Class : {this.state.stateData}</p>
                <button onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>decrement</button> {this.state.counter}
                <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>increment</button>
                <br />
        
                <button onClick={() => { this.setState({ status: !this.state.status }) }}>Change Status { JSON.stringify(this.state.status)}</button>
                
                <br />
            </>
        );
    }
}

export default StateClassComponentInReact;