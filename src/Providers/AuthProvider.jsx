
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

     const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

     const signIn=(email,password)=>{
        setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }

    const LogOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

     useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
               console.log("Current user Auth state changed",currentUser);
               setUser(currentUser)
               setLoading(false)
         })
         return ()=>{
             unSubscribe()
         }
     },[])
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        LogOut
        
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;