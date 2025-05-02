import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from 'firebase/auth';
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Register
    const register = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password )
    };

    // logOut
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    };

    // Login

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // update user
    // const updateUserProfile = () =>{
    //     return updateProfile(auth.currentUser, )
    // }


    // manage user
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])
   
    const userInfo = {
        user,
        register,
        logOut,
        login,
        loading,
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;