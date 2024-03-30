import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todo/actions/todoActions'
import AddIcon from '@mui/icons-material/Add';
function AddTask() {
  console.log("addTask rendered")
  const dispatch = useDispatch()
  const [addTodoValue, setAddTodoValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let date = new Date();
    let time = date.getTime()
    let addTodoObj = {
      id: time,
      todo: addTodoValue,
      completed: false
    }
    dispatch(addTodo(addTodoObj))
    setAddTodoValue("")
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div class='w-full md:w-1/2 flex flex-col gap-6 justify-center items-center px-4'>
      <p class='text-lg md:text-xl lg:text-xl xl:text-4xl font-serif font-medium'>Your Personal To-Do App</p>

      <form onSubmit={handleSubmit} class="flex flex-col md:flex-row gap-2 md:gap-4 py-1 w-full md:w-auto">
        <input class='border-2 border-gray-400 px-3 py-1 rounded-md w-full md:w-72 focus:outline-none focus:border-blue-500' type='text' name='addTodo' value={addTodoValue} placeholder='Add Task' onChange={(e) => { setAddTodoValue(e.target.value) }} />
        <button type='submit' class='bg-blue-500 rounded-md font-medium px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 w-full md:w-auto'>Add Task</button>
      </form>
    </div>


  )
}

export default AddTask