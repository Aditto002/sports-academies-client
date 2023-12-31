import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import useCart from "../../hook/useCart";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handelLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const navbutton = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/instructor">Our Instructor</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        {
          user ?<Link to="/Dashborart/mystudent">
          <button >
            Dashborart
            <div className="badge bg-black border-none text-white">+{cart?.length || 0}</div>
          </button>
        </Link>:<Link to="/login">
          <button >
            Dashborart
            <div className="badge bg-black border-none text-white">+{cart?.length || 0}</div>
          </button>
        </Link>
        }
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black opacity-60  text-white max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbutton}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><img className="h-[20px] w-[20px]" src="https://t4.ftcdn.net/jpg/03/02/12/83/360_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg" alt="" /> Sport academies</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbutton}</ul>
      </div>
      <div className="navbar-end bg-black">
        {user && (
          <Link href="">
            <img
              className="rounded-full mr-3 bg-black"
              style={{ height: "40px" }}
              src={user.photoURL}
              alt=""
            />
          </Link>
        )}
        {user ? (
          <Link to="/login" className="btn " onClick={handelLogOut}>
            logOut
          </Link>
        ) : (
          <div>
            {" "}
            <Link to="/login" className="btn ">
              Login
            </Link>
            <Link to="/register" className="btn ml-3">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
