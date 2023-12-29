import React from 'react';

function TodoList() {
  return (
    <div className='flex mt-5 p-2 mx-auto rounded relative bg-slate-400'>
    <li className='list-none text-blue-950 font-bold text-wrap'>hello welcome</li>
   <div className='absolute right-2'> <button className='text-black font-bold'>X</button>
    </div>
    </div>
  )
}

export default TodoList