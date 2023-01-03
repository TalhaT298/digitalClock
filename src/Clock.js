import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [state, setState]=useState();

    useEffect(()=>{
        setInterval(() => {
            const date=new Date();
            setState(date.toLocaleTimeString());
        },1000);//text-8xl px-40 py-60 flex justify-center items-center
    },[])
    return (
        <div className='text-6xl h-[40rem] flex justify-center items-center sm:text-8xl text-white'>
          {state}
        </div>
    );
};

export default Clock;