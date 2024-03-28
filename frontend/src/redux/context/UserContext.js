"use client";

import { createContext,useContext,useEffect,useReducer } from "react";
import reducer from "../reducers/UserReducer";

const UserContext = createContext();

const initalState = {
    user:{}
}

const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const getUser = async() => {
    try {
        const token = localStorage.getItem("DU-Auth");
        console.log(token);
        if(token){
        const res = await fetch("http://localhost:5000/api/auth/getuser", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            },
          });
          const data = await res.json()
          console.log(data.msg);
          dispatch({type:"SET_USER",payload:data.msg})
        }
    } catch (error) {
        console.log(error);
    }

  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export {UserContext,UserProvider,useUserContext}
