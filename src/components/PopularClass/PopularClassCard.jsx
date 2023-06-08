import React from 'react'

function PopularClassCard({populer}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={populer.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Activity : {populer.activity}</h2>
    <p>Students : {populer.students}+</p>
    <div className="card-actions">
      <button className="btn btn-primary">See More</button>
    </div>
  </div>
</div>
  )
}

export default PopularClassCard