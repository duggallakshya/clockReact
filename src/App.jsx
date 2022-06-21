import React, { useState } from 'react';

const App = () => {
    const purple = '#8e44ad';
    const [bg , setbg] = useState(purple);
    const [name, setName] = useState('Click');

    const bgColorChange = () => {
        setbg('#34495e');
        setName('Clicked');
    }

    const bgdbl = () => {
        setbg(purple);
        setName('double');
    }
    return(
        <>
            <div className="card" style={{backgroundColor: bg}}>
                <button onClick={bgColorChange} onDoubleClick={bgdbl}> {name} </button>
                <button onMouseEnter={bgColorChange} onMouseLeave={bgdbl}> {name} </button>
            </div>
        </>
    )
}

export default App;