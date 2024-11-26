import Student from './Student.jsx'


function App() {
 
  return(
    <div>
      {/* use {} for not string litrels */}
      <Student name = "surya" age = {18} roll = {21} isStudent= {true} />
      <Student name = "narendra modi" age = {68} roll = {27} isStudent= {false} />
      <Student name = "kamal " age = {38} roll = {5} isStudent= {false} />
      <Student name = "karan " age = {21} roll = {23} isStudent= {true} />
      <Student />
    </div>
  )

}

export default App
