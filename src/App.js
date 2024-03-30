
import { useDispatch, useSelector } from 'react-redux';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { deleteAll, deleteAllActive, deleteAllCompleted } from './redux/todo/actions/todoActions';
import { useState } from 'react';
import CompletedTask from './components/CompletedTask';

function App() {
  console.log("App rendere")
  const [editableForm, setEditableForm] = useState(false)
  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todoReducers)

  const handleEditableForm = () => {
    setEditableForm(true)
  }
  return (
    <div className='flex  bg-blue-200 h-screen w-screen py-5 overflow-auto'>
      <div className='m-auto flex flex-col rounded-md py-10 gap-3 justify-center items-center bg-gray-100 shadow-xl w-3/5'>

        <AddTask editableForm={editableForm} />

        <TaskList editableForm={editableForm} handleEditableForm={handleEditableForm} />

        <CompletedTask />
        
        <div>
          {(todoList.completedTasks.length > 0 || todoList.activeTasks.length > 0) && (<button className='bg-red-600  py-2 px-2 rounded-md text-white' onClick={() => { dispatch(deleteAll()) }}>Delete All Task</button>)}
        </div>
      </div>
    </div>

  );
}

export default App;
