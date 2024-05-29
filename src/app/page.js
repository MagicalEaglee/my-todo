"use client"
import List from "@/Components/List";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const[value,setValue]=useState("");
  const[list,setList]=useState([]);


  const handlechange=(e)=>{
    setValue(e.target.value);
  }
  const addTodo=()=>{
    setList([...list,value])
    setValue("");
  }
  const deleteItem=(id)=>{
    const newList=list.filter((item,i)=>i!==id)
    setList(newList)
  }
  return (
    <>
    <h1 className='mt-2 mb-2 text-center text-5xl text-blue-400 font-extrabold'>Time To Progress.....</h1>
    <div className='mx-auto w-2/4 border-blue-400 border-2 h-11 rounded-3xl overflow-auto'>
      <input className='outline-none w-3/4 px-5' value={value} onChange={handlechange} type="text"  placeholder="Write Something...."/>
      <button className='w-1/4 bg-blue-400 text-white h-full rounded-3xl' onClick={addTodo}>Add</button>
    </div>
    <List todo={list} deleteI={deleteItem}/>
    </>
  );
}
