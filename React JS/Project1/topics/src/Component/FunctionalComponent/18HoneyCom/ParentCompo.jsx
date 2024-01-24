import React, { useRef, useState } from 'react';
import ChilCompo from './ChilCompo.jsx';

const ParentCompo = () => {
    const [ele, setEle] = useState();
    const childRef = useRef();
    const parentFunction = async (data) => {
        console.log("called parentFunction update", data);
        await setEle(data)
    }
    return (
        <div>
            Parent Component
            <button className='btn mt-2' onClick={() => childRef.current.getAlert()}>Shuffle</button>
            {(ele && ele.length) ?
                <table>
                    <thead>
                        <tr>
                            <th>col-1</th>
                            <th>col-2</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>{ele[0]}</td>
                        <td>{ele[1]}</td>
                    </tr>
                    <tr>
                        <td>{ele[2]}</td>
                        <td>{ele[3]}</td>
                    </tr>
                </table> : "no data"}
            <ChilCompo ref={childRef} onAddHandler={parentFunction} />
        </div>
    );
};

export default ParentCompo;