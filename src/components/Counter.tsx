import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='flex items-center justify-center gap-6'>
      <button
        className='flex flex-row items-center justify-center w-14 h-10 rounded-md gap-2 border-4 border-white text-white'
        onClick={() => {
          if (counter === 0) return;
          setCounter((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h3 className='text-3xl text-white'>{counter}</h3>
      <button
        className='flex flex-row items-center justify-center w-14 h-10 rounded-md gap-2 border-4 border-white text-white'
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};
