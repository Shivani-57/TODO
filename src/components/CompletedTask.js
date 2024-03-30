import React from 'react'
import PerTask from './PerTask'
import { useSelector } from 'react-redux'

function CompletedTask() {
    const todoList = useSelector(state => state.todoReducers)
  return (
    <>
    <h2>Completed Task</h2>
    <div className='border-2 border-green-500 w-1/2 max-h-[400px] overflow-y-auto flex flex-col gap-1'>
        
    {
      todoList.completedTasks.map((todo)=>{
        return <PerTask  todo ={todo} key={todo.id}></PerTask>
      })
    }
  </div>
  </>
  )
}

export default CompletedTask