import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteOne, toggleComplete } from '../redux/todo/actions/todoActions'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

function PerTask({ todo}) {
    console.log("PerTask Redner")
    const dispatch = useDispatch()
    console.log("todo OBj",todo)
    return (
        <div className='p-3  bg-gray-200 rounded-md flex flex-row items-center gap-4 h-fit'>
            <div className=''>
                {todo.completed ? (<CheckCircleRoundedIcon className='!w-7 !h-7 !text-green-600 !accent-green-600' onClick={() => { dispatch(toggleComplete(todo)) }} />) :
                    (<RadioButtonUncheckedRoundedIcon className='!w-7 !h-7 !text-blue-500 !accent-blue-500' onClick={() => { dispatch(toggleComplete(todo)) }} />)}
            </div>
            <div className={`flex-grow whitespace-normal text-xl min-h-[1.25rem] border-3 ${todo.completed && 'text-gray-400'}`}>
                {todo.todo}
            </div>
            <div className='bg-red-500 p-1 flex justify-center items-center  rounded-sm'><button onClick={() => { dispatch(deleteOne(todo)) }}><DeleteForeverRoundedIcon style={{ color: 'white' }} /></button></div>
        </div>
    )
}

export default PerTask