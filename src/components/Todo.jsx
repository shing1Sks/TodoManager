import React, { useContext, useEffect, useState } from 'react'
import { useTodoContext } from '../context/Context'

function Todo({todo}) {
    const { removeTodo , updateTodo ,toggleDone} = useTodoContext()
    const [todoMsg , setTodoMsg] = useState(todo.msg)
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const editTodo = ()=>{
        updateTodo(todo.id,todo)
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        toggleDone(todo.id)
    } 
  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${ todo.done ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
      <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.done}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.done ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={(e) => {
                    if (todo.done) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.done}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => removeTodo(todo.id)}
            >
                ❌
            </button>
    </div>
  )
}

export default Todo
