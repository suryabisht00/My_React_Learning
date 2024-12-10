//  useContext() = React hook that allows you to share valeus between
//                 multiple levels of without passng props through every level . 

// provided component 
// 1. import {createContext} from 'react';
// 2. export const myContext = createContext();
// 3. <MyContext.Provider value = {'hello'}>
// 4. <child />
// 5. </MyContext.Provider>



// consumer components
// 1. import React, {useContext} from 'react';
//    import {myContext} from './ComponentA';
// 2. const value = useContext(myContext);


import React,{ useState, useEffect } from 'react'

import ComponentA from './ComponentA'


import ComponentD from './ComponentD'

function App() {

  return (
    <>
  <ComponentA />
    </>
  )
}

export default App
