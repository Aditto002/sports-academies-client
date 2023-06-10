import React from "react";
import useCart from "../../hook/useCart";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";

function MyStudent() {
  const [cart,refetch] = useCart();
  const hendeldelete=item =>{
    console.log(item._id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/carts/${item._id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data =>{
          if(data.deletedCount >0){
            refetch();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        
      }
    })
  }
  
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="w-full ml-28">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 >total registration : {cart.length}</h3>
        <h3 >total Amount: ${total}</h3>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
  
          <thead>
            <tr>
              <th>
              #
              </th>
              <th>Image</th>
              <th>Sports Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
        {
          cart.map((item,index) => <tr>
            <td key={item._id}>
              <label>
                {index+1}
              </label>
            </td>
            <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                
              </div>
            </td>
            <td>
              {item.activity}
            </td>
            <td >${item.price}</td>
            <td>
              <button onClick={()=>hendeldelete(item)} className="btn btn-ghost  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr> )
        }
           
          </tbody>
         
        </table>
      </div>
    </div>
  );
}

export default MyStudent;
