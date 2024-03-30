import React from 'react'
import PerTask from './PerTask'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllCompleted } from '../redux/todo/actions/todoActions'

function CompletedTask() {
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.todoReducers)
    return (
        <>
            <div className='mt-2 flex justify-between items-center w-1/2'>
                
                {todoList.completedTasks.length > 0 && (<><h2 className='font-medium text-lg'>Completed Tasks</h2><button className='bg-red-600 px-4 p-2  rounded-md text-white' onClick={() => { dispatch(deleteAllCompleted()) }}>Clear Completed Tasks</button></>)}
            </div>

            <div className=' w-1/2 flex flex-col gap-1 max-h-[300px] overflow-auto'>

                {
                    todoList.completedTasks.map((todo) => {
                        return <PerTask todo={todo} key={todo.id}></PerTask>
                    })
                }
            </div>
        </>
    )
}

export default CompletedTask