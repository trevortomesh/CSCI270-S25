import { useState } from 'react';

let counter = 0;
function App(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Alice');
    // const [stateVariable, setStateFunction] = useState(initialValue);
    return (
        <div>
            <h1>Click Counter</h1>
            <p>You've clicked {count} times.</p>
            <button onClick={() => setCount(count +1)}>Click Me, {name}!</button>
            <button onClick={() => setName("Bob")}>Click Me</button>
            Clicked {counter} times
        </div>
    );
}

export default App;