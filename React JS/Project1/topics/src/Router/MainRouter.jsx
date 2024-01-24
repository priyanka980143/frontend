import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutusCompo from "./../Component/Pages/AboutUs"
import HomeCompo from "./../Component/Pages/HomeCompo.jsx"
import HeaderCompo from './../Component/Common/HedaerCompo.jsx';
import LoaderCompo from './../Component/Common/LoaderCompo.jsx';
import ContactCompo from './../Component/Pages/ContactCompo.jsx';
import ExampleCompo from './../Component/Pages/ExampleCompo.jsx';

// import ClassCompo from './../Component/ClassComponent/ClassCompoRoute.jsx';
// import FunctionalCompo from './../Component/Pages/FunctionalCompo.jsx';


// const ClassCompo = React.lazy(()=>)
// const ClassCompo = lazy(()=>import('./../Component/ClassComponent/ClassCompoRoute.jsx'))
const ClassCompo = lazy(()=>{ return import('./../Component/ClassComponent/ClassCompoRoute.jsx')})
const FunctionalCompo = lazy(()=>{ return import('./../Component/FunctionalComponent/FunctionalCompoRoute.jsx')})
const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomeCompo />),
    }, {
        path: "/about",
        element: (<><HeaderCompo /><AboutusCompo /></>),
    }, {
        path: "/contact",
        element: (<><HeaderCompo /><ContactCompo /></>),
    }, {
        path: "/examples",
        element: (<><HeaderCompo /><ExampleCompo /></>),
        children: [
            {
                path: "/examples/classcomponent/*",
                element: (<Suspense fallback={<LoaderCompo/>} ><ClassCompo /></Suspense>),
                // element: (<Suspense fallback={<>je type krvu hoi....</>} ><ClassCompo /></Suspense>),
            },{
                path: "/examples/functionalcomponent/*",
                element: (<Suspense fallback={<LoaderCompo/>} ><FunctionalCompo /></Suspense>),
                // element: (<><FunctionalCompo /></>),
            }
        ]
    }
])

export default router;