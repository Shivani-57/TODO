import { ADD_TODO, DELETE_ALL, DELETE_ONE, TOGGLE_COMPLETE } from "../actions/todoActions"

const initialState = [
    {id:1,todo: "Dummy ToDo 1",completed:false},
    {id:2,todo: "Dummy ToDo 2",completed:true},
    {id:3,todo: "Dummy ToDo 3",completed:false}
]

export const todoReducers = (state = initialState,action) =>{
    switch(action.type){
        case ADD_TODO:
             return [...state,action.payload]
        case DELETE_ALL:
            console.log("Delete all in reducers")
            return []
        case DELETE_ONE:
            console.log(action.payload.id)
            const filteredTask = state.filter(task => task.id !== action.payload.id)
            return filteredTask
        case TOGGLE_COMPLETE:
            
            const index = state.findIndex((task)=> task.id === action.payload.id)
            // console.log(index)
            // console.log(state[index].completed = !state[index].completed)
            // console.log([...state, state[index].completed = action.payload.completed])
            // console.log(state)
            state[index].completed = !state[index].completed
            const updatedToggleState = [...state]
            // console.log(updatedToggleState)
            return updatedToggleState
            // return [...state, state[index].completed = action.payload.completed]
            
        default:
            return state
    }
}