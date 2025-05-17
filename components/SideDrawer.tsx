import Image from 'next/image';
import React from 'react';

//make absolute or sticky, absolute is for topside only so sticky.
const BASE_URL_PHOTO="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";
function SideDrawer({place, close}:any) {
  const onDirectionClick=()=>{
    window.open(`https://www.google.com/maps/search/?api=1&query=`+place.name+place.formatted_address, '_blank');
    //place.name+place.formatted_address
  }
  return (
    <div className='h-screen w-screen md:w-[400px] bg-white shadow-md p-5 z-20'>
        <button onClick={()=>close()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        <div>
            <h2 className='line-clamp-2 text-[20px] font-semibold mb-3'>{place.name}</h2>
            <Image src={BASE_URL_PHOTO+"&photo_reference="+place?.photos[0]?.photo_reference+"&key="+process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY} alt='placeholder'width={200} height={80} className='w-full rounded-xl h-[180px] object-fill' />
            <div className='flex gap-2 mt-3 text-blue-400'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

                <h2 className='text=[16px] text-gray-400 line-clamp-2'>{place.formatted_address}</h2>
            </div>
            <div className='flex gap-2 mt-3 text-blue-400'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>

              <h2 className='text-[12px] text-gray-400 line-clamp-2 tracking-wider'>{place?.rating} ({place?.user_ratings_total})</h2> 
            </div>
            <div className='mt-5 flex gap-5'>
                <button onClick={()=>onDirectionClick()}className='flex gap-2 p-1 px-3 bg-blue-400 rounded-full text-white cursor-pointer hover:scale-105 transition-all'>
                    <h2 className='text-[12px] text-white'>Directions</h2>
                </button>
                <button className='bg-blue-400 rounded-full p-1 px-3 text-white cursor-pointer hover:scale-105 transition-all'>
                        <h2>Share</h2>
                    </button>
            </div>
            <div className='mt-5'>
            <iframe
                width={450}
                height={250}
                loading="lazy"
                className="w-full h-[200px] rounded-lg"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}&q=${place.name}`}>
            </iframe>
            </div>
        </div>
    </div>
  );
};

export default SideDrawer;