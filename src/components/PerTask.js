import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteOne, toggleComplete } from '../redux/todo/actions/todoActions'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

function PerTask({ todo, editableForm, handleEditableForm }) {
    console.log("PerTask Redner")
    const dispatch = useDispatch()
    return (
        <div className='flex flex-row items-center gap-4 border-2 px-1 h-fit border-red-500'>
            <div className='bg-blue-200 border-3 border-gray-600'>
                {todo.completed ? (<CheckCircleRoundedIcon onClick={() => { dispatch(toggleComplete(todo)) }} />) :
                    (<RadioButtonUncheckedRoundedIcon onClick={() => { dispatch(toggleComplete(todo)) }} />)}
            </div>
            <div className={`flex-grow whitespace-normal text-xl min-h-[1.25rem]  bg-blue-200 border-3 ${todo.completed && 'text-gray-400'}`}>
                {todo.todo}
            </div>

            {/* <div className='bg-blue-200 border-3 border-gray-600'>{todo.completed ? "✅" : "❌"}</div> */}
            {/* <div className='bg-blue-200 border-3 border-gray-600'><button onClick={handleEditableForm} >Edit</button></div> */}
            <div className='bg-red-500 w-10 rounded-sm'><button onClick={() => { dispatch(deleteOne(todo)) }}><DeleteForeverRoundedIcon style={{ color: 'white' }} /></button></div>
        </div>
    )
}

export default PerTask