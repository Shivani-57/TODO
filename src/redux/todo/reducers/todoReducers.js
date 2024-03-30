import { ADD_TODO, DELETE_ALL, DELETE_ALL_ACTIVE, DELETE_ALL_COMPLETE, DELETE_ONE, TOGGLE_COMPLETE } from "../actions/todoActions"

const initialState = {
    
    activeTasks:[
        {id:1,todo: "Dummy ToDo 1",completed:false},
        {id:3,todo: "Dummy ToDo 3",completed:false}],
    completedTasks:[
        {id:2,todo: "Dummy ToDo 2",completed:true}]
    
    
}

export const todoReducers = (state = initialState,action) =>{
    switch(action.type){
        case ADD_TODO:
            console.log(action.payload)
            console.log(...state.activeTasks)
             return {
                ...state,
                activeTasks:[...state.activeTasks,action.payload]
             }
        case DELETE_ALL_ACTIVE:
            console.log("Delete all in reducers")
            return {
                ...state,
                 activeTasks:[]
            }
        case DELETE_ALL_COMPLETE:
            return{
                ...state,
                 completedTasks:[]
            }
        case DELETE_ALL:
            return{
                ...state,
                 activeTasks:[],
                 completedTasks:[]
            }
        case DELETE_ONE:
            // console.log(action.payload.id)
            // const filteredTask = state.filter(task => task.id !== action.payload.id)
            // return filteredTask
            return{
                ...state,
                activeTasks : state.activeTasks.filter(task => task.id !== action.payload.id),
                completedTasks : state.completedTasks.filter(task => task.id !== action.payload.id)

            }
        case TOGGLE_COMPLETE:
            
            if(state.activeTasks.findIndex((task)=> task.id === action.payload.id) != -1){
                const index = state.activeTasks.findIndex((task)=> task.id === action.payload.id)
                
                state.activeTasks[index].completed=true
                
                const taskToUpdate = state.activeTasks[index]
                
                const updatedList = {
                    ...state,
                     activeTasks:state.activeTasks.filter(task => task.id !== taskToUpdate.id),
                     completedTasks:[...state.completedTasks,taskToUpdate] 
                }
               
                return updatedList

            }
            else{
                const index = state.completedTasks.findIndex((task)=> task.id === action.payload.id)
                
                state.completedTasks[index].completed=false
               
                // console.log("taskto Update", )
                const taskToUpdate = state.completedTasks[index]
                
                const updatedList = {
                    ...state,
                     activeTasks:[...state.activeTasks,taskToUpdate],
                     completedTasks:state.completedTasks.filter(task => task.id !== taskToUpdate.id) 
                }
                
                return updatedList
            }   
            // console.log(index)
            // console.log(state[index].completed = !state[index].completed)
            // console.log([...state, state[index].completed = action.payload.completed])
            // console.log(state)
            // state[index].completed = !state[index].completed
            // const updatedToggleState = [...state]
            // // console.log(updatedToggleState)
            // return updatedToggleState
            // return [...state, state[index].completed = action.payload.completed]
            
        default:
            return state
    }
}