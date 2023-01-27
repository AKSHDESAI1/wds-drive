import React, { useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../config/firebase-config';


const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unSubscribe;
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        signout
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : <h1> Loading... </h1>}
        </AuthContext.Provider>
    )
};

export default AuthContext;

export { useAuth, AuthProvider };