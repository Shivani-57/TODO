import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todo/actions/todoActions'
import AddIcon from '@mui/icons-material/Add';
function AddTask({editableForm}) {
  console.log("addTask rendered")
  const dispatch = useDispatch()
  const [addTodoValue,setAddTodoValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let date = new Date();
    let time = date.getTime()
    let addTodoObj = {
      id:time,
      todo:addTodoValue,
      completed:false
    }
    dispatch(addTodo(addTodoObj))
    setAddTodoValue("")
  }

  const handleEditSubmit =(e)=>{
    e.preventDefault()

  }
  console.log("editableFomr",editableForm)
  return (
    <div className='border-2 border-blue-800 w-1/2   flex flex-col gap-6 justify-center items-center'>
      <p className='text-sm sm:text-lg md:text-2xl lg:text-4xl font-serif '>Your Personal To-Do App</p>

      {editableForm?( <form onSubmit={handleEditSubmit} className="flex flex-row gap-1">
            <input type='text' className='border-2 border-slate-500 px-1 rounded-md w-96' name='addTodo' value={addTodoValue} placeholder='Add Task' onChange={(e)=>{setAddTodoValue(e.target.value)}} />
            <button type='submit 'className='bg-red-500 rounded-md px-2 py-1 w-14'>Update</button>
        </form>):( <form onSubmit={handleSubmit} className="flex flex-row gap-1 py-1">
            <input className='border-2 border-slate-500 px-1 rounded-md w-96' type='text' name='addTodo' value={addTodoValue} placeholder='Add Task' onChange={(e)=>{setAddTodoValue(e.target.value)}} />
            <button type='submit' className='bg-red-500 rounded-md px-2 py-1 w-14'><AddIcon /></button>
        </form>)}
     
        
    </div>
  )
}

export default AddTask