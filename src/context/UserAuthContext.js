import { createContext, useEffect, useState, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function userAuthContextProvider({ children}) {
    const [ user, setUser] = useState('')
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function Login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser))

    }, []);
    return (
        <userAuthContext.Provider value={}>
            { children }
        </userAuthContext.Provider>
    )
}

export function userAuth () {
    return userContext( userAuthContext);
}