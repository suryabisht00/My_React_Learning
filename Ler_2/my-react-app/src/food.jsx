

function Food(){
    const food1 = 'Orange';
    const food2 = 'Banana';
    return(
        <ul>
            <li>Apple</li>
            <li>food1</li>
            {/* WE USE CURLY BRACES{} TO PRINT JS VARIABLES IF WE DONT DO IT WILL PRINT AS IT IS */}
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}


export default Food;