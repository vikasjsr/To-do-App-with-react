import React, { useEffect, useState } from 'react'
import "./Home.css"
import Task from '../Task/Task'
const Home = () => {

  const initialArray = localStorage.getItem("tasks")
  ?JSON.parse(localStorage.getItem("tasks")) 
  :[] ;

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [motivation, setMotivation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, {title, motivation}]);
  }

  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
        return i !== index;
    })
    setTasks(filteredArray);
  }

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  return (
    <main>
        <div id='body-div'>
             <form onSubmit={submitHandler}>
                <input
                 type="text"
                 placeholder='Enter your task' 
                 value={title}
                 onChange = {(e) => setTitle(e.target.value)}
                 />

                <input 
                type="text"
                placeholder='Motivation to complete' 
                value={motivation}
                onChange = {(e) => setMotivation(e.target.value)}
                />
                <button className='add' type='submit' >Add</button>
             </form>
            {/* it is must to pass a unique key to that component in map function which is rendering */}
          {tasks.map((item, index, ) => (    
            <Task 
              key={index} 
              title ={item.title} 
              motivation ={item.motivation}
              deleteTask = {deleteTask}
              index = {index}
              />
          ))}
        </div>
    </main>
  )
}

export default Home
