import category from '@/data/category';
import Image from 'next/image';
import React, { useState } from 'react';

function Hero({userInput}:any) {

    const [searchInput,setSearchInput]=useState<string>();
  return (
    <div className='text-center'>
        <div>
            <Image src='/bg.png' alt='hero-image' width={800} height={200} className='w-full h-full absolute mt-[-50px]'/>
            <div className='mt-[70px] z-10'>
                <h2 className='text-[55px] text-blue-400 tracking-widest font-semibold'>Bizniz</h2>
                <h2 className='text-[20px]'>Business places near you!</h2>
                <div className='mt-5 z-10 flex gap-2 items-center justify-center'>
                    <input type='text'
                    onChange={(e)=>setSearchInput(e.target.value)} 
                    placeholder='Search any place' className= 'bg-white p-3 z-10 border-[1px] rounded-full px-5 w-[36%] shadow-sm' />
                    <button onClick={()=>userInput(searchInput)} className='bg-blue-400 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </button>
                </div>
                <div className='mt-5 flex flex-col justify-center items-center'>
                    <h2> Or Browse by category</h2>
                    <div className='grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3'>
                        {category.map((item, index) => (
                            <div key={item.id} className='border-[1px] w-[60px] p-4 bg-white rounded-full z-10
                            hover:border-blue-400 hover:scale-110 cursor-pointer transition-all'>
                                <Image src={item.icon} alt={item.name} width={30} height={30}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;