import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.confing"
import { GoogleAuthProvider } from "firebase/auth";


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

    useEffect(()=>{
    const unsubscribe=  onAuthStateChanged(auth, loggedUser=>{
        console.log("logged in user ",loggedUser)
        setUser(loggedUser);
        setLoading(false);
      })
      return ()=>{
        unsubscribe();
      }
    })

    const authInfo = {
      createUser,
      singIn,user,logOut,loading,googleLogIn
    }
  return (
    <AuthContext.Provider value= {authInfo}>
           {children}
    </AuthContext.Provider>
  )
}

export default AuthProbider