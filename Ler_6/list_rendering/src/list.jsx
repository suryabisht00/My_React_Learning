

function List(){

const fruits = [{name : 'apple', calories : 95 },
               {name: 'banana', calories : 95},
               {name:'orange' , calariou:100},
               {name:'grapes', calariou:105},
               { name:'mango', calariou:130}];
fruits.sort();
const listitem = fruits.map((fruit) => <li>{fruit.name}</li>)

return(
    <ol>
        {listitem}
    </ol>
)
}
export default List;