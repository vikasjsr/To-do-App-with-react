import React from 'react'
import "./Home.css"
import Task from '../Task/Task'
const Home = () => {
  return (
    <main>
        <div id='body-div'>
             <form>
                <input type="text" placeholder='Enter your task' />
                <input type="text" placeholder='Motivation to complete' />
                <button className='add' type='submit' >Add</button>
             </form>

          <Task />
          <Task />

          <Task />


        </div>
    </main>
  )
}

export default Home
