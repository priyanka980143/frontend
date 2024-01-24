import React, { useState } from 'react';
import ChildComponent from './16ChildComponent.jsx';

const StateLiftingInFunctionalCompo = () => {
    const [statedata, setStatedata] = useState();
    const parentFunc = (data) => {
        setStatedata(data)
    }
    return (
        <>

            <p>Parent State : {statedata}</p>
            {/* <button>Click Parent</button> */}
            <ChildComponent func={parentFunc} />
        </>
    );
};

export default StateLiftingInFunctionalCompo;