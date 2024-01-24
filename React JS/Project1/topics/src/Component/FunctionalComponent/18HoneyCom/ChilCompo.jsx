import React, { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useState } from 'react';

// const ChilCompo = () => {
const ChilCompo = forwardRef((props, ref) => {
    const [ele, setEle] = useState();
    const [ele2, setEle2] = useState();
    const arr = [1, 2, 3, 4, 5, 6];
    useImperativeHandle(ref, () => ({
        getAlert() {
            // console.log("called");
            // shuffle(arr);
            let suffRes = shuffle(arr);
            // console.log("suffRes res", suffRes);
            setEle(suffRes[0]);
        },
    }))
    // useLayoutEffect(() => {
    useEffect(() => {
        let suffRes = shuffle(arr);
        setEle(suffRes[0]);
        setEle2(suffRes[1]);
        suffRes.shift(); // for first element
        suffRes.shift(); // for second element
        props.onAddHandler(suffRes);
    }, [ele])
    const shuffle = (array) => {
        for (let index = array.length - 1; index > 0; index--) {
            const j = Math.floor(Math.random() * (index + 1));
            const temp = array[index];
            array[index] = array[j];
            array[j] = temp;
        }
        return array
    }
    return (
        <div>
            Child Component
            <h3>Child first Element {ele}</h3>
            <h3>Child second Element {ele2}</h3>
        </div>
    );
});

export default ChilCompo;