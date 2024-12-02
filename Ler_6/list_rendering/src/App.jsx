import List from "./list.jsx"

// reusable component
function App() {
  const fruits = [
  { id: 1, name: 'apple', calories: '95' },
  { id: 2, name: 'banana', calories: 15 },
  { id: 3, name: 'orange', calories: 100 },
  { id: 4, name: 'grapes', calories: 105 },
  { id: 5, name: 'mango', calories: 130 }
];


  const vegitables = [
    { id: 6, name: 'patatos', calories: 235 },
    { id: 7, name: 'celery', calories: 345 },
    { id: 8, name: 'carrot', calories: 105 },
    { id: 9, name: 'onion', calories: 130 },
    { id: 10, name: 'apple', calories: 95 }
  ];
  
  return (<>
    {fruits.length > 0 && <List items={fruits} category="Fruits" />}
    {/* short circuting :-  */}
    {fruits.length > 0 && <List items={vegitables} category="vegitables" />}
    </>
  )
}

export default App
