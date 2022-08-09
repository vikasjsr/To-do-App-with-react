import React from 'react'
import "./Task.css"

const Task = ({title, motivation, deleteTask, index}) => {

  return (
    <div className = 'main-task'>
        <div className = 'list'>
            <input type= 'checkbox' id='check-btn' name='check'/>
            
                <div className='task-todo'>
                    <p>{title}</p>
                    <span className='motivation'>{motivation}</span>
                </div>
        </div>
        <button className='remove' onClick={() => deleteTask(index)} >Remove</button>
    </div>
  )
}

export default Task
