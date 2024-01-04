import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ExampleCompo = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <Link to="classcomponent"><h2>Class Component</h2></Link>
                    </div>
                    <div className="col">
                        <Link to="functionalcomponent"><h2>Functional Component</h2></Link> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExampleCompo;