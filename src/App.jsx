import React, { useState } from 'react';

const App = () => {
    const state = useState();

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // const [time, setTime] = useState(time);

    const UpdateTime = () => {
        setTime(new Date().toLocaleTimeString())
    } 


    return (
        <>
            <div className="card">
                <h1> {time} </h1>
                <button onClick={UpdateTime}> Get Time </button>
            </div>
        </>
    )
}

export default App;