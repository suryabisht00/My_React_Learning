import React , {useState} from 'react';

function Counter()
{

    const [ count ,setcount] = useState(0);


    const increment = () => {
        setcount(count + 1);
    }   


     const decrement = () => {
        setcount(count - 1);
    }   


     const reset = () => {
        setcount(0);
    }


    return(
    <div className='counter-container'>
                <p className='counter-display'>{count}</p>
                <button className='counter-button' onClick={decrement}>Decrement</button>
                <button className='counter-button' onClick={reset}>Reset</button>
                <button className='counter-button' onClick={increment}>Increment</button>
    </div>

    );
}

export default Counter;