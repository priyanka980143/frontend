import { useState } from "react";



const CustomHook = (initState,initError) => {
    // console.log("CustomHook");
    const [inp,setInp] = useState(initState);
    const [errors,setError] = useState(initError);
    const handleChange = (e) => {
        // console.log("inside hangle change");
        let SpanId = [e.target.name]+"Error";
        if (e.target.value == '') {
            setError({ ...errors,[SpanId]: "This field is required" })
        } else {
            setError({ ...errors,[SpanId]: "" })
            setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        }
    }
    return { handleChange,inp,errors }
    // return  handleChange
}



export default CustomHook;