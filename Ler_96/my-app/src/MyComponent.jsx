import React,{useState ,useEffect, useRef } from 'react';



function MyComponent() {

    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    useEffect(() => {
      console.log("Component rendered");
    //   console.log(inputRef);
    });

    function handleclick(){
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = 'yellow';
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
    }
    function handleclick1(){
        inputRef1.current.focus()
        inputRef.current.style.backgroundColor = '';
        inputRef1.current.style.backgroundColor = 'red';
        inputRef2.current.style.backgroundColor = '';
    }
    function handleclick2(){
        inputRef2.current.focus()
        inputRef.current.style.backgroundColor = '';
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = 'blue';
    }
  return (
    <>
    <button onClick={handleclick}>
      click me
    </button>
    <input  ref={inputRef} />
    <br />
    <button onClick={handleclick1}>
      click me 1
    </button>
    <input  ref={inputRef1} />
    <br />

    <button onClick={handleclick2}>
      click me 1
    </button>
    <input  ref={inputRef2} />

    </>
  )
}

export default MyComponent
