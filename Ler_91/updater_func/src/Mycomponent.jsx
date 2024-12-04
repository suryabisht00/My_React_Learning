import React, { useState } from "react";

function Mycomponent() {

    const [car, setcar] = useState({
        year: 2020,
        make: "Toyota",
        model: "Corolla"
    });

    function handleyearchange(event) {

        setcar(c => ({ ...car, year: event.target.value }));
    }
    function handlemakehange(event) {
        setcar(c => ({ ...car, make: event.target.value }));
    }
    function handlemodelange(event) {
        setcar(c => ({ ...car, model: event.target.value }));
    }
    return (
        <div>
            <h1>Your favorite car year is : {car.year} </h1>
            <input type="number" value={car.year} onChange={handleyearchange} /><br />


            <h1> and favorite car is : {car.make}</h1>
            <input type="text" value={car.make} onChange={handlemakehange} /><br />


            <h1>car spcific model is  : {car.model}  </h1>
            <input type="text" value={car.model} onChange={handlemodelange} /><br />
        </div>
    )
}
export default Mycomponent;