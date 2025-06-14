import { useState, useEffect } from 'react';

function LoggerCounter({ initial }){
    const [count, setCount] = useState(initial);
    const [titleText, setTitleText] = useState('Ready to Start Counting!');

    useEffect(() => {
        setTitleText(`Count is now ${count}`);
        console.log(`Count is now ${count}`);
    }, [count]);

    return (

        <div>
            <h2>{titleText}</h2>
            <p> Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}


function Counter({ initial }){
    const [count, setCount] = useState(initial);
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}

function App(){
    return(
        <div>
            <h1>Logger Counter A</h1>
            <LoggerCounter initial={0}/>

            <h1>Logger Counter B</h1>
            <LoggerCounter initial={100}/>
        </div>
    );
}

export default App;