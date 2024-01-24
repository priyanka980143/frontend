import React from 'react';
import { useContext } from 'react';
import { AppContext } from './12FunctionalUseContext';
const ChildComponent = () => {
    const { username, setUsername } = useContext(AppContext)
    return (
        <>
            <h1>User Compo: {username}</h1>
            <input type="text" name="" onChange={(event) => {
                setUsername(event.target.value)
            }} id="" />
        </>
    );
};

export default ChildComponent;