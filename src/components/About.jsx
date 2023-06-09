import React from 'react'

function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse pl-14">
    <div className='w-1/2 pl-24'>
    <img src="https://images.pexels.com/photos/159515/football-american-football-runner-player-159515.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">Behind every successful athlete stands a dedicated and skilled instructor who plays a crucial role in shaping their careers. These exceptional individuals possess a unique blend of expertise, experience, and passion that elevates them to the status of the best instructors in the world of sports. In this article, we will explore some of these exceptional individuals who have made a significant impact in their respective sports and have earned the admiration of athletes and fans alike.</p>
    </div>
  </div>
</div>
  )
}

export default About