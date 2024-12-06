import React,{useState , useEffect} from 'react';

function DisplayHightWidth (){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(() => {
        return () => {
            window.addEventListener("resize", handleresize);
            console.log("Even listne removed")
            
            return() => {
                window.removeEventListener("resize", handleresize);
                console.log("Even listne removed")
            }
        }
    },[])


    useEffect(() => {   
        document.title = `size: ${width} x ${height}`;
    }, [width, height])

    function handleresize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    

    return (
    <div>
        <p> Window Width: {width}px</p>
        <p> Window heighet: {height}px</p>
    </div>
    )
}

export default DisplayHightWidth;