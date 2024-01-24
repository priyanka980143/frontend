import React, { createContext, useState } from 'react';
import ChildCompo from './ChildComponent.jsx';
import Login from './Login.jsx';

export const AppContext = createContext(null);

const FunctionalUseContext = () => {
    const [username,setUsername] = useState("");
    return (
        <>
            {/* <ChildCompo username="something"></ChildCompo> */}
            <AppContext.Provider value ={{ username, setUsername }}>
                <ChildCompo />
                <Login />
            </AppContext.Provider>
            Testing
        </>
    );
};

export default FunctionalUseContext;