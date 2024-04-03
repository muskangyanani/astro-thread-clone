import React from 'react';
export default function CreateThread(){
  return (
    <div className='sm:hidden flex w-full text-neutral-700 items-center justify-center font-bold'>
      <button className=' py-2 w-full focus:text-white focus:border-b focus:border-white transition-colors'>
        For you 
      </button>
      <button className='py-2  w-full focus:text-white focus:border-b focus:border-white transition-colors'>
        Following
      </button>
    </div>
  )
}