import React ,{ useState } from 'react'

function Mycomponent2 (){


    const [cars , setcars]=  useState([])
    const [caryear , setyear] = useState(new Date().getFullYear());
    const [carmake , setmake]= useState('');
    const [carmodel , setmodel] = useState('');

    function handleaddcar(){
        const newcar = {
            year:caryear,
            make:carmake,
            model:carmodel
        };

        setcars(c => [...c,newcar]);

        setyear(new Date().getFullYear());
        setmake(" ");
        setmodel('');


    }
    function handleremovecar(index){
        setcars(c => c.filter((c,i) => i !== index))
        
    }
    function handleyearchange(event){
        setyear(event.target.value)
    }
    function handlemakechange(event){
        setmake(event.target.value)
    }
    function handlemodelchange(event){
        setmodel(event.target.value)
    }
    return(
        <div>
            <h2>
                list of car object
            </h2>
            <ul>
                {cars.map((car,index) => 
                <li key={index} onClick= {() => handleremovecar(index)}>
                    {car.year} {car.make} {car.model}

                </li>
                )}
            </ul>
                <input type='number' value={caryear} onChange={handleyearchange}/><br/>
                <input type='text' value={carmake} onChange={handlemakechange} 
                placeholder='Enter car make'/><br/>
                <input type='text' value={carmodel} onChange={handlemodelchange} 
                placeholder='Enter car make'/><br/>
                <button onClick={handleaddcar}>Add Car</button>
        </div>
    
    )
        
}

export default Mycomponent2;