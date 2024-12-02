

// function List(props){
//     const itemlist = props.items;

// const fruits = [{id : 1,name : 'apple', calories : 95 },
//                {id : 2,name: 'banana', calories : 15},
//                {id : 3,name:'orange' , calories:100},
//                {id : 4,name:'grapes', calories:105},
//                {id : 5, name:'mango', calories:130}];

// // using defult sort method to sort the fruits array.
// // fruits.sort();


// // The 'sort' method is called on the 'fruits' array to sort its elements.
// // The 'sort' method takes a comparison function as an argument.


// // fruits.sort((a, b) => 
// //     // The comparison function compares two elements 'a' and 'b'.
// //     // 'a.name' and 'b.name' are the properties being compared.
// //     // 'localeCompare' is a method that compares two strings in the current locale.
// //     // It returns a negative number if 'a.name' comes before 'b.name', 
// //     // a positive number if 'a.name' comes after 'b.name', 
// //     // and 0 if they are equal.

// //     // sort by name
// //     // b.name.localeCompare(a.name)

// //     // sort by calories (Numeric order)
// //     // a.calories - b.calories);


// //     // sort by calories (Reverse Numeric order)
// //     b.calories - a.calories
// // );

//     // const LowCalFruits = fruits.filter(fruit => fruit.calories > 100);
//     const LowCalFruits = fruits.filter(fruit => fruit.calories <= 100);




// // const listitem = fruits.map((fruit) => <li>{fruit.name} </li>)
// // showing  warining on colsole that we need to add key to each list item.
// // we can use name or id as key if we have unique values.   
// // const listitem = fruits.map((fruit) => <li key={fruit.name}>{fruit.name} </li>)
// // const listitem = fruits.map((fruit) => <li key={fruit.id}>
// //                                             {fruit.name}:&nbsp;
// //                                             {fruit.calories} </li>)
                                        
                                            
                                            
// const listitem = LowCalFruits.map((LowCalFruits) => <li key={LowCalFruits.id}>
//                                             {LowCalFruits.name}:&nbsp;
//                                             {LowCalFruits.calories} </li>)

// return(
//     <ol>
//         {listitem}
//     </ol>
// )
// }
// export default List;


// reusable component
// dynamic data showcase:-


import PropTypes from 'prop-types';
function List(props){
    const itemlist = props.items;
    const category = props.category;
                                            
const listitem = itemlist.map((item) => <li key={item.id}>
                                            {item.name}:&nbsp;
                                            {item.calories} </li>)

return(
    <>
    <h3 className="list-category">
        {category}
    </h3>
    <ol className="list-items">
        {listitem}
    </ol>
    </>

)
}

List.propTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),    
    
}


List.defaultProps = {
    items: [],
    category: "Items",
};
export default List;