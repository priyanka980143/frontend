import React, { useReducer, useState } from 'react';


const kuchbhi = (state, action) => {
    console.log("State", state, "Action", action);
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            break;
    }
}

const UseReducerHookInFunctionalCompo = () => {
    // const [counter,setCounter] = useState(0)
    // const increment = () => {setCounter(counter + 1)}
    const [state, dispatch] = useReducer(kuchbhi, { count: 0 })

    return (
        <>
            <p>useReducer is a React Hook that lets you add a reducer to your component.</p>
            {/* <button onClick={() => setCounter(counter + 1)} > Click Here </button>
            <button onClick={() => setCounter(counter - 1)} > Click Here </button> */}
            {/* <button onClick={increment} > Click Here </button> */}
            {/* <button onClick={() => setCounter(counter - 1)} > Click Here </button> */}
            <h2>{state.count}</h2>
            <button onClick={() => { dispatch({ type: "INCREMENT" }); }} > Click Here </button>
            <button onClick={() => { dispatch({ type: "DECREMENT" }); }} > Click Here </button>

        </>
    );
};

export default UseReducerHookInFunctionalCompo;