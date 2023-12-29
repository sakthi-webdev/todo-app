import React from 'react';

function TodoForm() {
  return (
    <div>
    <input className='rounded p-2 mr-2 outline-none' type="text" placeholder='enter todo..' />
    <button className='bg-slate-300 p-2 rounded text-blue-950 font-bold'>Add</button>
    </div>
  )
}

export default TodoForm