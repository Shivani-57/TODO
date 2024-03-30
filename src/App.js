
import { useDispatch, useSelector } from 'react-redux';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { deleteAll } from './redux/todo/actions/todoActions';
import { useState } from 'react';

function App() {
  console.log("App rendere")
  const [editableForm,setEditableForm] = useState(false)
  const dispatch = useDispatch()
 const todoList = useSelector(state => state.todoReducers)

 const handleEditableForm = ()=>{
   setEditableForm(true)
 }
  return (
    <div className='flex  bg-red-200 h-screen w-screen justify-center'>
      <div className='flex flex-col py-2 gap-3 justify-center items-center bg-slate-100 w-3/5 h-fit rounded border-2 border-slate-400'>
    
      <AddTask editableForm={editableForm}/>
      <TaskList editableForm={editableForm} handleEditableForm={handleEditableForm}/>
      {todoList.length > 0 && ( <button className='bg-red-600 w-1/6 py-2 rounded-md text-white' onClick={()=>{dispatch(deleteAll())}}>Delete All</button>)}
      </div>
    </div>
    
  );
}

export default App;
