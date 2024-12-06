import React ,{useState} from 'react'
function MyComponents(){
    const[food , setfood] = useState(['biriyani','chicken','paneer','pasta'])

    function handleaddfood(){
        const newfood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = " ";
        setfood(f => [...food , newfood]);
    }
    function handleremovefood(index){
        // setfood(food.filter((_ , i) => i !==index ))
        setfood(food => food.filter((food,i) => i !== index))
    }
    return(
        <>
        <h2>List of food items: </h2>
            <ul>
                {food.map((food , index )=> 
                <li key={index} onClick={() => handleremovefood(index)}>
                {food}
                </li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='enter food name '/>
            <button onClick={handleaddfood}>Add food</button>
        

        </>
    )
}

export default MyComponents;