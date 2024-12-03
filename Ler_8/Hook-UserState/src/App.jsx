// React hook = special funcation that allows funcatinoal components 
//              to use react features without writting class components (react version 16.8)
//              (usestate, usereffect,usercontext, userreducer,usercallback and more......)

// useState() = A react hook that allows the creation of stateful variable and a setter funcation to update its value in the vertual Dom [name, setName] = useState('')



import MyComponent from "./MyComponent.jsx" 
import React, {useState} from 'react';

import Counter from "./Counter.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />;
      <Counter />
    </>
  )
}

export default App






