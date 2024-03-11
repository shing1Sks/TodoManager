import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos : [
        {
            id : "",
            msg : "",
            done : false
        }
    ],
    addTodo : ()=>{},
    updateTodo : ()=>{},
    removeTodo : ()=>{},
    toggleDone : ()=>{}
})

export const useTodoContext = () => useContext(todoContext)

export const Provider = todoContext.Provider