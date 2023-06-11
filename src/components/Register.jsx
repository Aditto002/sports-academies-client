import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/Authprovider'
import Swal from 'sweetalert2';

function Register() {

    const {createUser,updateUserProfile} = useContext(AuthContext);
    const [error , setError] = useState('')
    const handeRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo =form.photo.value;
        const password = form.password.value;
        const con_password = form.con_password.value;
        console.log(name,email,photo,password,con_password);

        localStorage.setItem('photo', JSON.stringify(photo))
        
        setError('')
        if(password.length<6){
            setError('password must be 6 characters')
            return
          }
        if(password!==con_password){
            setError('password and confirm password is not mach!')
            return
          }
          createUser(email,password)
        .then(result =>{
            const createUser = result.user;
            
            console.log(createUser);

            updateUserProfile(name, photo)
            .then(() => {
                const saveUser = { name: name, email: email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                          form.reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            // navigate('/');
                        }
                    })



            })
            .catch(error => console.log(error))
    })
        // })
        
    }

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left w-1/2 mr-12">
        
        <img src='https://cdn.pixabay.com/photo/2014/09/20/23/43/keypad-454453_640.jpg' alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <form onSubmit={handeRegister}>
        <h1 className="text-3xl font-bold text-center">Register now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name='name'
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name='email'
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name='password'
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Confirm Password</span>
            </label>
            <input
              name='con_password'
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name='photo'
              type="text"
              placeholder="url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p>{error}</p>
        </form>
        <p className="text-center my-4">Have any account ? <Link to='/login' className="text-orange-600 font-bold">Sing In</Link></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register