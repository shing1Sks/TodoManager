import { useState,useEffect } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { Provider } from "./context/Context";

export default function App() {
  const [todos,setTodos] = useState([])
  const addTodo = (msg)=>{
    setTodos((prev)=>[...prev,{msg,id:Date.now(),done:false}])
  }
  const removeTodo = (id)=>{
    setTodos((prev)=>(
      prev.filter((val)=>{
        if(val.id === id ){
          return false;
        }
        else{
          return true;
        }
      })
    ))
  }
  const updateTodo = (msg,id)=>{
    setTodos((prev)=>(
      prev.map((val)=>{
        if(val.id === id ){
          val.msg = msg;
          return val;
        }
        return val;
      })
    ))
  }
  const toggleDone = (id)=>{
    setTodos((prev)=>(
      prev.map((val)=>{
        if(val.id === id ){
          val = val.done ? {msg:val.msg,id:val.id,done:false} : {msg:val.msg,id:val.id,done:true}; 
          return val;
        }
        return val;
      })
    ))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <Provider value = {{todos,addTodo,removeTodo,updateTodo,toggleDone}}>
      <div className=" w-screen min-h-screen  bg-[#F5F5F5] flex justify-center p-8">
        <div className=" md:w-[70%] w-[90%]  h-auto border-2 border-gray-300 p-8 bg-[#DAE0F5] rounded-lg text-center text-2xl text-white shadow-xl">
          <h2 className="">Manage your TODO's</h2>
          <Form />
          <div className="flex flex-wrap gap-y-3 mt-2">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>(
                <div key={todo.id}
                className="w-full">
                  <Todo  todo={todo}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Provider>
  );
}
