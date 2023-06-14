import React from "react";
import ClassesCart from "./ClassesCart";
import { useState } from "react";
import { useEffect } from "react";

function Clsasses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://sports-academies-server-tau.vercel.app/populer")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=600")',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Our Class</h1>
            <p className="mb-5 w-[600px] text-center">
            Enhancing Physical Fitness and Team Spirit. Participating in regular sport classes is an excellent way to improve physical fitness while fostering a sense of teamwork and camaraderie. Through engaging in various sports activities, students develop valuable skills, learn sportsmanship, and experience the numerous health benefits associated with an active lifestyle. Sport class promotes holistic growth and an enduring passion for physical well-being
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 mt-10 mb-10'>
        {
            data.map(populer=><ClassesCart
            key={populer._id}
            populer={populer}></ClassesCart>)
        }
    </div>
    </div>
  );
}

export default Clsasses;
