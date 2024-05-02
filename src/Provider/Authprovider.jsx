import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import app from "./config";

export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
    const auth = getAuth(app)
    const [user,setuser] = useState(null)

    const SignUpByEmail = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignInByEmail = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
        } else {
            console.log("log out")
        }
      });

    const authinfo = {
        user,
        SignUpByEmail,
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;