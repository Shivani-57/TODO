import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PerTask from './PerTask'
import { deleteAllActive } from '../redux/todo/actions/todoActions'

function TaskList() {
  const dispatch = useDispatch()
  console.log("TaskList rendering")
  const todoList = useSelector(state => state.todoReducers)
  return (
    <>
    <div className='flex justify-between items-center w-1/2 '>
     
    {todoList.activeTasks.length > 0 && (<> <h2 className='font-medium text-lg'>Active Tasks</h2><button  className='bg-red-600 px-4 p-2  rounded-md text-white'  onClick={() => { dispatch(deleteAllActive()) }}>Clear Active Tasks</button></>)}
    </div>
    <div className='w-1/2 flex flex-col gap-1 max-h-[300px] overflow-auto'>

      {
        todoList.activeTasks.map((todo)=>{
          return <PerTask  todo ={todo} key={todo.id}></PerTask>
        })
      }
    </div>
    </>
  )
}

export default TaskList