import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PopularClassCard from './PopularClassCard';

function PopularClass() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data=>setData(data))
    }, [])


  return (
    <div>
        <h1 className='text-2xl text-center mt-5'>Some Popular Classes</h1>
        <div className='grid md:grid-cols-3 gap-4 grid-cols-1'>
            {
                data.map(populer =><PopularClassCard
                key={populer._id}
                populer={populer}></PopularClassCard>)
            }
        </div>

    </div>
  )
}

export default PopularClass