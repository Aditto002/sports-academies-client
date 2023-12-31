import React, { useContext } from 'react'
import {AuthContext} from '../../providers/Authprovider';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hook/useCart';

function PopularClassCard({populer}) {
  const {_id,activity,students,price,image} = populer
  const [, refetch] = useCart();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const handlebutton = ({populer}) =>{
    if(user && user.email){
      const list ={_id,activity,image,students,price,email:user.email};
      fetch('https://sports-academies-server-tau.vercel.app/carts',
      {
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(list)
      }
      )
      .then(res => res.json())
      .then(data =>{
        if(data.insertedId){
          refetch();
          alert('add')
        }
        else{
          alert('login')
        }
      })
    }

     console.log(populer);
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure >
    <img src={populer.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Activity : {populer.activity}</h2>
    <p>Students : {populer.students}+</p>
    <p>Price : ${populer.price}</p>
    <div className="card-actions">
      <button onClick={()=>handlebutton({populer})} className="btn btn-primary">Add to card</button>
    </div>
  </div>
</div>
  )
}

export default PopularClassCard