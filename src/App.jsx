import React, { useState } from 'react';

const App = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const UpdateTime = () => {
        setTime(new Date().toLocaleTimeString())
    } 

    setInterval(UpdateTime,1000);
    return (
        <>
            <div className="card">
                <h1> {time} </h1>
            </div>
        </>
    )
}

export default App;