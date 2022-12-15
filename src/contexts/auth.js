import React, {useState, createContext } from "react";
import connectionDB from "../services/ConnectionDB";

export const AuthContext = createContext({});

function AuthProvider ({ children }) {

    const [user, setUser] = useState({
        email: 'teste@gmail.com',
        senha: 'teste'
    });

    // const [user, setUser] = useState('');

    function signUp (email, password) {

        const newUser = {
            userEmail: email,
            userPassword: password
        }

        connectionDB(newUser);

    }

    return (

        <AuthContext.Provider value={{ signed: !!user, user, signUp}}>
            { children }
        </AuthContext.Provider>
         
    );

}

export default AuthProvider;