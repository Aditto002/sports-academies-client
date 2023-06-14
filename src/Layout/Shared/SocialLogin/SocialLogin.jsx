import React from "react";
import { useContext } from "react";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../../providers/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

function SocialLogin() {
    const {googleLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
     const from = location.state?.from?.pathname || '/';
     console.log ('here',from)

     const handleGoogle =()=>{
        googleLogIn()
        .then((result) => {
             const user = result.user;
             console.log(user);

             const saveUser = { name: user.displayName, email: user.email }
             fetch('https://sports-academies-server-tau.vercel.app/users', {
                 method: 'POST',
                 headers: {
                     'content-type': 'application/json'
                 },
                 body: JSON.stringify(saveUser)
             })
                 .then(res => res.json())
                 .then(data => {
                     if (data.insertedId) {
                    
                         // navigate('/');
                     }
                 })

             
            //  navigate(from);
    
        })
        .catch((error) => {
          console.log(error)
        })
    
      }
  return (
    <div>
      <div className="divider"></div>
      <div className="text-center my-4 ">
      <button onClick={handleGoogle} className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
      </div>
    </div>
  );
}

export default SocialLogin;
