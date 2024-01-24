import React, { createContext, useContext, useState } from 'react';


const  ThemeContext = createContext();
const MainCompo = () => {
    const [theme,setTheme]= useState("light");
    return (
        <>
            <p>useContext is a React Hook that lets you read and subscribe to context from your component.</p>
            <ThemeContext.Provider value={theme}>
            <FormCompo />
            </ThemeContext.Provider>
        </>
    );
};


function FormCompo(props) {
    return (
        <>
            Child Data
            <PanelForDisp>
                <button>Signup</button>
                <button>Signin</button>
            </PanelForDisp>
        </>
    )
}

function PanelForDisp(params) {
    const theme = useContext(ThemeContext)
    const customClass = "panel-"+theme;
    return(
        <>
            Grand Child Data
           <div className={customClass}>
           {/* <div> */}
            testing
           </div>
        </>
    )
}

export default MainCompo;