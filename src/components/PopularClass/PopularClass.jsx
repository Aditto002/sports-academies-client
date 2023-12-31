import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PopularClassCard from './PopularClassCard';

function PopularClass() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://sports-academies-server-tau.vercel.app/populer")
        .then(res => res.json())
        .then(data=>setData(data))
    }, [])


  return (
    <div className='mb-5'>
        <h1 className='text-3xl text-center mt-5 mb-5 font-bold'>Some Popular Classes</h1>
        <div className='grid md:grid-cols-3 gap-4 grid-cols-1'>
            {
                data.slice(0, 6).map(populer =><PopularClassCard
                key={populer._id}
                populer={populer}></PopularClassCard>)
            }
        </div>

    </div>
  )
}

export default PopularClass