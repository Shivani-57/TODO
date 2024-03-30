import React from 'react'
import { useSelector } from 'react-redux'
import PerTask from './PerTask'

function TaskList({editableForm,handleEditableForm}) {
  console.log("TaskList rendering")
  const todoList = useSelector(state => state.todoReducers)
  return (
    <div className='border-2 border-green-500 w-1/2 max-h-[400px] overflow-y-auto flex flex-col gap-1'>
      {
        todoList.activeTasks.map((todo)=>{
          return <PerTask editableForm={editableForm} handleEditableForm={handleEditableForm} todo ={todo} key={todo.id}></PerTask>
        })
      }
    </div>
  )
}

export default TaskList