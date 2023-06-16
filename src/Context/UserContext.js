import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../Firebase/Firebase.init';

const auth=getAuth(app);
 export const AuthContex=createContext();


const UserContext = ({children}) => {

    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true);

    const createUSer=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect( ()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return()=>{
            return unsubscribe();
        }
    } ,[])
    const Authinfo={
    user,loading,createUSer,login

    }
    return (
        <AuthContex.Provider value={Authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContext;