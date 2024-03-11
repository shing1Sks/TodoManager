import React, { useState } from "react";
import { useTodoContext } from "../context/Context";

function Form() {
  const {addTodo} = useTodoContext();
  const [todo, setTodo] = useState("");
  const add = (e) => {
    e.preventDefault();
    if(!todo) return
    addTodo(todo)
    setTodo("")
  };
  return (
    <form className="flex items-center mt-[3%]" onSubmit={add}>
      <input
        type="text"
        className="rounded-l-lg text-lg text-gray-600 font-semibold border p-1 w-full outline-none "
        value={todo}
        onChange={(e) => setTodo(e.currentTarget.value)}
        placeholder="Write Todo..."
      />
      <button
        type="submit"
        className="bg-slate-600 p-[5px] text-lg rounded-r-lg hover:bg-slate-700 active:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
