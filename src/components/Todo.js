import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
  return ( 
    <div className='bg-[#1d2671] p-10 rounded-md'> 
    <header>
    <h1 className='text-2xl text-center p-5 text-white font-bold'>Todo List</h1>
    </header>
    <TodoForm />
    <TodoList />
    </div>

  )
}

export default Todo;