"use client";
import { createContext, useContext, useReducer,useEffect  } from "react";
import reducer from "../reducers/HomeReducer";

const HomeContext = createContext();

const initalState = {
    isLoding:true,
    packageCards:[],
    continueWatching:[],
    isLogin:false
};

const HomeProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initalState);

    const getAllPackages = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/datas/packs",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            const data = await res.json();
            if(res.ok){
                dispatch({type:"SET_PACK_DATA",payload:data})
            }
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getAllPackages()
    },[]);

    return(
        <HomeContext.Provider value={{...state}}>
            {children}
        </HomeContext.Provider>
    )
};


const useHomeContext=()=>{
    return useContext(HomeContext);
}

export {HomeProvider,useHomeContext, HomeContext};