// updater function = A function passd as an argument to setstate() usally
//                    ex. setYear(arrow function)
//                    Allows safe updated based on the previous state value
//                    used with multiple state updates and asynchronous functions
//                    Good practice to use updater funcation



import React , {useState} from 'react';

function Counter()
{

    const [ count ,setcount] = useState(0);


    // takes the pending state to calcultate the next state
    // React puts your updater funcation in a queue (waiting in line)
    // During the next render , it will call them in the same orde.

    function increment(){
        setcount(c => c + 1);
        setcount(c => c + 1);
        setcount(c => c + 1);

    }




     const decrement = () => {
        setcount(c => c - 1);
        setcount(c => c - 1);
        setcount(c => c - 1);
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