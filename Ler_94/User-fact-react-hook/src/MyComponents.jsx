// useEffect() = React hook that tells react do some code when (pick one)"
//               - This is component is re-rendered  
//               - This is component mounts(mounts - create and append to the dom)
//               - The state of a value  


// useEffect(function , [dependencies])

// useEffect(() => {})  // Runs after every re-render
// useEffect(() => {},[])  // Runs only on mount
// useEffect(() => {},[value])  // Runs on mount + when value changes

// Uses
// #1- Event listiners
// #2- Dom manipulation
// #3- Subscription(real-time updates)
// #4- Fetching Data from an Api
// #5- Clean up when a component unmounts(unmounts - removes from the dom)



import React,{useState , useEffect} from "react";
function MyComponents(){

    const [count , setCount] = useState(0);
    const [ color , setcolor] = useState("red");

    // // It change title multiple times when we click on add button
    // useEffect(() => {
    //     document.title = `count : ${count}`
    // })


    // // It change title single times when we click on add button - useEffect(() => {},[])
    // useEffect(() => {
    //     document.title = `count : ${count}`
    // },[])

    // It Runs on mount + when value changes(() => {},[first value , second value ])
    useEffect(() => {
        document.title = `count : ${count} ${color}`
    },[count,color])

    function HandleCountValueAdd(){
        setCount(c => c+1)
    }
    function HandleCountValueSub(){
        setCount(c => c-1)
    }


    function ChangeColor(){
        setcolor(c => c === "green" ? "red":"green")
        setCount(c => c+2)
    }
return(
    <>
    <h1 style={{color : color }}>MyComponents</h1>
    <p style={{color : color }}> count :- {count}</p>
    <button onClick={HandleCountValueAdd}>add</button>
    <span> </span>
    <button onClick={HandleCountValueSub}>sub</button><br />
    <button onClick={ChangeColor}>ChangeColor</button>
    </>
)
}
export default MyComponents;