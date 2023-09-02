import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {GoogleAuthProvider, browserSessionPersistence, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signInWithPopup, signOut}  from 'firebase/auth'





const firebaseConfig = {
  apiKey: "AIzaSyASNZ2h7spNS7JYZLD4bIUQMqUS7lhU3mM",
  authDomain: "blogwebsite001-a9161.firebaseapp.com",
  projectId: "blogwebsite001-a9161",
  storageBucket: "blogwebsite001-a9161.appspot.com",
  messagingSenderId: "1000370423220",
  appId: "1:1000370423220:web:4bf9f870c93cc779d61ee1"
};



const app = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth();

const FirebaseGoogleAuthProvider=new GoogleAuthProvider();
setPersistence(FirebaseAuth,browserSessionPersistence);
const FirebaseContext = createContext(null);
const FirebaseApp= initializeApp(firebaseConfig);
export const FirebaseStorage=getStorage(FirebaseApp);
export const useFirebase=()=>useContext(FirebaseContext);



export const FirebaseProvider=(props)=>{

    const [user,setUser]=useState('');


    const SignUp=(email,pass)=>{
        return createUserWithEmailAndPassword(FirebaseAuth,email,pass)
    }
    const LogIn=async(email,pass)=>{
        try{
            return await signInWithEmailAndPassword(FirebaseAuth,email,pass)
        }catch(err){
            console.log(err)
        }
    }
    const GoogleLogIn=async()=>{
        try{
            return await signInWithPopup(FirebaseAuth,FirebaseGoogleAuthProvider);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        const Status=()=>onAuthStateChanged(FirebaseAuth, (currentUser)=>{
            setUser(currentUser)
        })
        return Status()
    },[]);

    function LogOut(){
        return signOut(FirebaseAuth)
    }




    return(
        <FirebaseContext.Provider value={{GoogleLogIn,LogIn,LogOut,SignUp,user}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
