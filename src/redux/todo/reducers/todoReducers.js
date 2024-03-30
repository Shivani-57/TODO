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
            console.log("IN toggle",action.payload)
            console.log("In Index",state.activeTasks.findIndex((task)=> task.id === action.payload.id))
            if(state.activeTasks.findIndex((task)=> task.id === action.payload.id) != -1){
                const index = state.activeTasks.findIndex((task)=> task.id === action.payload.id)
                console.log("active",index)
                state.activeTasks[index].completed=true
                console.log(state.activeTasks[index].completed=true)
                console.log("ccc",state.activeTasks[index])
                const taskToUpdate = state.activeTasks[index]
                console.log("task to update",taskToUpdate)
                const updatedList = {
                    ...state,
                     activeTasks:state.activeTasks.filter(task => task.id !== taskToUpdate.id),
                     completedTasks:[...state.completedTasks,taskToUpdate] 
                }
                console.log(updatedList)
                return updatedList

            }
            else{
                const index = state.completedTasks.findIndex((task)=> task.id === action.payload.id)
                console.log("else index",index)
                state.completedTasks[index].completed=false
                console.log("CT",state.completedTasks[index].completed=false)
                console.log(state.completedTasks[index].completed)
                console.log("se",state.completedTasks[index])
                // console.log("taskto Update", )
                const taskToUpdate = state.completedTasks[index]
                console.log("task to update",taskToUpdate)
                console.log("ATasks",[...state.activeTasks,taskToUpdate])
                console.log("Ctasks",state.completedTasks.filter(task => task.id !== taskToUpdate.id))
                const updatedList = {
                    ...state,
                     activeTasks:[...state.activeTasks,taskToUpdate],
                     completedTasks:state.completedTasks.filter(task => task.id !== taskToUpdate.id) 
                }
                console.log("Updated List",updatedList)
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