import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1 className='mt-2 mb-2 text-center text-5xl text-blue-400 font-extrabold'>Jstar Todo</h1>
    <div className='mx-auto w-3/4 border-blue-400 border-2 h-11 rounded-3xl overflow-auto'>
      <input className='outline-none w-3/4 px-5' type="text" name="todo" placeholder="Write Something...."/>
      <button className='w-1/4 bg-blue-400  h-full rounded-3xl'>Add</button>
    </div>
    </>
  );
}
