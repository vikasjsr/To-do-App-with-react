import React from 'react'
import "./Task.css"

const Task = () => {
  return (
    <div className = 'main-task'>
        <div className = 'list'>
            <input type= 'checkbox' id='check-btn' name='check'/>
            
                <div className='task-todo'>
                    <p>Task</p>
                    <span className='motivation'>Motivation</span>
                </div>
        </div>
        <button className='remove'>Remove</button>
    </div>
  )
}

export default Task
