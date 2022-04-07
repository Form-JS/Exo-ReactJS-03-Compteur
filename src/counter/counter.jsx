import { useState } from 'react';

const INITIAL_COUNT = 0;

const Counter = ({ incr }) => {
    const [count, setCount] = useState(INITIAL_COUNT);

    const handleIncr = () => {
        console.log(`Incr - before : ${count}`);
        setCount(count => Math.min(count + incr, 10));  // <- Asynchrone !!!
        console.log(`Incr - after : ${count}`);
    };

    const handleReset = () => {
        console.log(`Reset - before : ${count}`);
        setCount(INITIAL_COUNT);                        // <- Asynchrone !!!
        console.log(`Reset - after : ${count}`);
    };

    return (
        <>
            <p>Valeur : {count}</p>
            <button onClick={handleIncr} disabled={count >= 10} >+{incr}</button>
            <br />
            {count !== INITIAL_COUNT && (
                <button onClick={handleReset}>Reset</button>
            )}
        </>
    );
};

Counter.defaultProps = {
    incr: 1
};

export default Counter;