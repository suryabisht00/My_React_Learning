// onclick event in react  


// function Button(){

//     let count = 0;
//     // const handleClick = () => console.log("ouchhhhhhhhh");

//     // const handleClick2 = (name) => console.log('stop clicking me');
//     const handleClick3 = (name) => {
//         if(count < 3){
//             count ++;
//             console.log(`${name} you clicked me ${count} time/s`);
//         }
//         else{
//             console.log(`${name} stop clicking me ! ${count} ` );
//             count ++;
//         }
//     };

//     return ( <>
//             {/* <button onClick={() => handleClick}>Click me</button> */}
//             {/* <button onClick={() => handleClick2("Bro")}>Click me</button> */}
//             <button onClick={() => handleClick3("Bro")}>Click me</button>
//     </>);
// }

// export default Button;





function Button(){

    const handleClick =(e) => e.target.textContent = "ouchhhhhhh";
    return ( <>
           <button onClick = {(e) => handleClick(e)} > click me </button> 
           
           {/* <button onDoubleClick = {(e) => handleClick(e)} > click me </button>  */}
            
    </>);
}

export default Button;