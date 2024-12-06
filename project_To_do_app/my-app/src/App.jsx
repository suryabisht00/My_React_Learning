import React,{ useState } from 'react'
import ToDoList from './ToDoList' 


function App() {
  
  const [tasks , setTask] = useState([]);
  const [newTask , setNewTask] = useState("");

  function addTask(){
    if(newTask.trim() !== ""){
      
    setTask(t => [...t , newTask]);
    setNewTask("");
}
  }
  // if we input something without this function it will not show in the input field
  function handleInputChange(event){
    setNewTask(event.target.value)

  }
  function deleteTask(index){
    const updatedTasks = tasks.filter((_ ,i) => i!==index);
    setTask(updatedTasks);
    
  }
  function moveTaskup(index){
    if(index > 0){
      const updatedTask = [...tasks];
      [updatedTask[index] , updatedTask[index -1]] =
      [ updatedTask[index-1] ,  updatedTask[index]]
      setTask(updatedTask);
    }
  }
  function moveTaskdown(index){
    if(index < tasks.length -1){
      const updatedTask = [...tasks];
      [updatedTask[index] , updatedTask[index + 1]] =
      [ updatedTask[index+1] ,  updatedTask[index]]
      setTask(updatedTask);
    }
  }
  return (
    <div className='to-do-list'>
      <h1>To do List </h1>

        <div>
          <input 
          type="text" 
          placeholder='Enter a task ..' 
          value={newTask}
          onChange={handleInputChange}
          />
          <button
          className='add-button' 
          onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task , index) => 
          <li key={index}>
            <span className='text'>{task}</span>
              <button className='Delete-button'
              onClick={() => deleteTask(index )}>
                Delete
              </button>

              <button className='move-button'
              onClick={() => moveTaskup(index )}>
                👆
              </button>
              <button className='move-button'
              onClick={() => moveTaskdown(index )}>
                👇
              </button>




          </li>)}
         
        </ol>
    </div>
  )
}

export default App
