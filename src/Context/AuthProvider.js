import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider();

    // register 
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut 
    const logOut = () => {
        return signOut(auth);
    }

    // google 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // update profile 

    const updateProfile = ([profileInfo]) => {
        return updateProfile(auth.currentUser, profileInfo)
    }

    // password reset 
    const updatePassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }


    // manage user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()


    }, [])


    const authInfo = {
        user,
        register,
        logIn,
        logOut,
        googleSignIn,
        updateProfile,
        updatePassword,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;