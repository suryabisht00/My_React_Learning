

import React, {useState} from 'react';
import Counter_updater from "./Counter_updater.jsx"
import Mycomponent from './Mycomponent.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < Mycomponent />
    </>
  )
}

export default App


