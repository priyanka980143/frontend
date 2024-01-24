import React, { useState } from 'react';
const StateFunctionalComponentInReact = () => {
    // const data = "something"
    let data = "something"
    // const [statedata,anything] = useState(); //state declaration
    const [statedata, anything] = useState("default"); // state with default value
    const [state, setState] = useState(true); // state with default value
    return (
        <>
        <h4>ReactJS State</h4>
        <p>React JS State is a way to store and manage the information or data while creating a React Application. The state is s JavaScript object that contains the real-time data or information on the webpage.</p>
        <h3>Conventions of Using State in React:</h3>
        <li>The state of a component should prevail throughout its lifetime, thus we must first have some initial state, to do so we should define the State in the constructor of the component’s class</li>
        <li>The state should never be updated explicitly. React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly.</li>
        <li>React provides its own method setState(). setState() method takes a single parameter and expects an object which should contain the set of values to be updated.</li>
        <li>The only time we are allowed to define the state explicitly is in the constructor to provide the initial state. </li>
            {data}
            <br />
            <button onClick={() => { data = "checking" }}>Click simple variable with let keyword</button> <br />
            <br />
            <button onClick={() => { anything("updated data") }}>update state</button>
            <p> State data :  {statedata} </p>
            <button onClick={() => { setState(!state) }}>Toggle {JSON.stringify(state)}</button>
            <p>Before React version 16.8, developers could handle state and other React features only using class components. But with version 16.8, React introduced a new pattern called Hooks.</p>

            <p> What does calling useState do? It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.</p>
            <p> What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)</p>
            <p> What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page.</p>

        </>
    );
};
export default StateFunctionalComponentInReact;