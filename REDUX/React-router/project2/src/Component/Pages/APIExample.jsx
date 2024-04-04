import React, { useEffect, useState } from 'react';

const APIExample = () => {
    const [ProData, setProdData] = useState({});
    useEffect(() => {
        FetchData()
    })
    const FetchData = async () => {
        await fetch("https://fakestoreapi.com/products").then((apijson) => apijson.json()).then((responseData) => {
            console.log(responseData);
            let ProductList = ""
            responseData.map((data) => {
                // console.log("inside loop",data.title);
                ProductList += <>{data.title}</>
            })
            console.log(ProductList);
            setProdData(ProductList)
        })
    }
    return (
        <> { JSON.stringify(ProData)}  </>
    );
};

export default APIExample;