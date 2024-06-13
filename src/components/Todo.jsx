import React, { useRef,useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
    const inputRef= useRef(null)
    const [todoList,setTodoList]=useState([])

    // logic to add the text
    const addText=()=>{
        const inputText=inputRef.current.value.trim()
        
        if(inputText==='') return null;
        const newTodo={
            id:Date.now(),
            text:inputText,
            isComplete:false
        }
        setTodoList((prev)=> [...prev,newTodo])
        inputRef.current.value=''
    }
  return (
    <div  className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'> 
       {/*---------title--------  */}

       <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt=''/>
        <h1 className='text-3xl font-semibold'>To-Do List </h1>
       </div>

       {/* ------input box ------ */}

       <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 ' type='text' placeholder='Add your task' ref={inputRef}/>
        <button onClick={addText} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD</button>
       </div>

       {/* -------to do list------- */}

       <div>
        {todoList.map((item,i)=>{
            return <TodoItems key={i} text={item.text}/>
        })}
       </div>
     
    </div>
  );
}

export default Todo;
