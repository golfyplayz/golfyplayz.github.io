import React, { useState, useEffect } from "react";

async function fetchUser(id) {
    const response = await fetch(`https://golfyplayz-github-io-benq.onrender.com/test/${id}`);
    const resp = await response.json();
    console.log(response);
    return resp;
  }

function Welcome() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchUser(1).then((resp) => {
            setData(resp.name);
        });
    }, []);

    if (data === null) {
        return <><h1>Welcome to Verdoorn Stocks!</h1></>
    }

    return (
        <>
            <h1>Welcome to Verdoorn Stocks, {data}!</h1>
        </>
    );
}

export default Welcome;