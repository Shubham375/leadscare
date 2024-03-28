"use client"

import { useContext } from "react";
import { UserContext } from "@/redux/context/UserContext";

const profile = () =>{
    const {user} = useContext(UserContext)

return(
    <h1>profile page   {JSON.stringify(user)}</h1>
    )
}

export default profile;