import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hook/useCart";

function Dashboart() {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-green-300">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}

          {
            isAdmin ? <>
            <li>
            <NavLink to="/Dashborart/userhome">Admin Home</NavLink>
          </li>
          <li>
            <NavLink to="/Dashborart/mystudent">Add Sports
            <span className="badge bg-black border-none text-white">+{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Dashborart/history">Manage Sports</NavLink>
          </li>
          <li>
            <NavLink to="/Dashborart/allusers">All Users</NavLink>
          </li>
            </> :<>
            <li>
            <NavLink to="/Dashborart/userhome">User Home</NavLink>
          </li>
          <li>
            <NavLink to="/Dashborart/mystudent">My Sports
            <span className="badge bg-black border-none text-white">+{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Dashborart/history">Payment History</NavLink>
          </li>
            </>

          }
          
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/instructor">Our Instructor</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboart;
