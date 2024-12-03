
import React, {useState} from 'react';

function MyComponent (){
     
    const [name , setName] = useState("Surya");
    const [age , setAge] = useState(0);
    const [isemployee , setEmp] = useState(true);

    const updateName = () => {
        setName(['spiderman']);
        // setName(['spiderman', 'batman', 'superman'][Math.floor(Math.random() * 3)]);
    }   
    const updateAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedstatus = () =>
        {
            setEmp(!isemployee);
        }
    return (
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}> set name</button>
            <p>age: {age} </p>
            <button onClick={updateAge}> set age</button>
            <p>employee: {isemployee ? 'yes' : 'No'} </p>
            <button onClick={toggleEmployedstatus}> set employee</button>
        </div>
    );
}

export default MyComponent