
import { useState } from "react"


function List({todo,deleteI}) {
    
  return (
    <div className='w-2/4 mx-auto mt-4 '>
      {
        todo.map((item,i)=>{
            return <li className=' list-none flex justify-between items-center px-3 mb-2 py-3 w-[100%] border-2 border-blue-400' key={i}>
                <h2 className=' break-words w-3/4'>{item}</h2>
                <button className='bg-black text-white px-4' onClick={()=>deleteI(i)}>X</button>
            </li>
        })
      }
    </div>
  )
}

export default List
