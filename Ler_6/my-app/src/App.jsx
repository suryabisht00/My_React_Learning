// conditional rendering = allow you to control what gets rendered in your application based on certain conditions (show,hide or change components)

import UserGreeting from "./user_greeting.jsx"  
function App() {
 
  return(
    <>
        <UserGreeting IsLoggedIn = {false} username="Brocode" />
    </>
)
}

export default App
