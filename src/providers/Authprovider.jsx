import React, { createContext, useEffect, useState } from 'react'
import { EmailAuthCredential, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.confing"
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';


const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
function AuthProbider({children}) {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
      setLoading(true);
     
      return createUserWithEmailAndPassword(auth,email,password);
    }
    
   const googleLogIn =()=>{
     return signInWithPopup(auth, provider);
   }

    const singIn =(email,password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        setLoading(true);
      return signOut(auth)
    }
    
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
      });
  }

    useEffect(()=>{
    const unsubscribe=  onAuthStateChanged(auth, loggedUser=>{
        console.log("logged in user ",loggedUser)
        setUser(loggedUser);
       
        if(loggedUser){
          axios.post('http://localhost:5000/jwt',{email: loggedUser.email})
          .then(data =>{
            console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
          })
        }
        else{
          localStorage.removeItem('access-token')
        }


        setLoading(false);
      })
      return ()=>{
        unsubscribe();
      }
    })

    const authInfo = {
      createUser,
      singIn,user,logOut,loading,googleLogIn,updateUserProfile
    }
  return (
    <AuthContext.Provider value= {authInfo}>
           {children}
    </AuthContext.Provider>
  )
}

export default AuthProbider