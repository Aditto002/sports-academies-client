import React from 'react'

function InstructorCard({instructor}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure >
    <img src={instructor.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Instructor : {instructor.name}</h2>
    <p>Students : {instructor.student}+</p>
    <div className="card-actions">
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
</div>
  )
}

export default InstructorCard