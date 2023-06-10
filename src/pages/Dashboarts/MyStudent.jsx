import React from "react";
import useCart from "../../hook/useCart";

function MyStudent() {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
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
            <td className="text-end">{item.price}</td>
            <td>
              <button className="btn btn-ghost btn-xs">details</button>
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
