export const ADD_TODO = "ADD_TODO";
export const DELETE_ALL_ACTIVE = "DELETE_ALL_ACTIVE";
export const DELETE_ALL_COMPLETE ="DELETE_ALL_COMPLETE";
export const DELETE_ALL = "DELETE_ALL";
export const DELETE_ONE = "DELETE_ONE";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const addTodo = (payload)=>{
   
    return{
        type:ADD_TODO,
        payload
    }
}

export const deleteAllActive = () => {
    console.log("Delete in actionc")
    return{
        type:DELETE_ALL_ACTIVE
    }
}

export const deleteAllCompleted = () => {
    console.log("Delete in actionc")
    return{
        type:DELETE_ALL_COMPLETE
    }
}

export const deleteAll =()=>{
    return{
        type:DELETE_ALL
    }
}
export const deleteOne = (payload) =>{
    return{
        type:DELETE_ONE,
        payload
    }
}

export const toggleComplete = (payload) =>{
    console.log(payload)
    return{
        type:TOGGLE_COMPLETE,
        payload
    }
}