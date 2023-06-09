import React, { useEffect, useState } from "react";
import AllinstructorCard from "./AllinstructorCard";

function Allinstructor() {
const [instructors, setInstructors] = useState([]);
useEffect(()=>{
    fetch('instructor.json')
    .then(res => res.json())
    .then(data => setInstructors(data));
},[])

  return (
    <div>
    <div
      className="hero h-[500px]"
      style={{backgroundImage: 'url("https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?auto=compress&cs=tinysrgb&w=600")'}}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Our Instructor</h1>
          <p className="mb-5 w-[600px] text-center">
          Our instructor stands as an epitome of excellence, inspiring and guiding us on a remarkable journey of growth. With unwavering dedication and expertise, they have elevated our skills and instilled in us a passion for the sport. Let us delve into their extraordinary story of mentorship and leadership.
          </p>
        </div>
      </div>
    </div>
    <div className='grid grid-cols-2 gap-4 mt-10 mb-10'>
        {
            instructors.map(instructor=><AllinstructorCard
            key={instructor._id}
            instructor={instructor}></AllinstructorCard>)
        }
    </div>
  </div>
  
  );
}

export default Allinstructor;
