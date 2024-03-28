"use client"
import { TextField,Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const login = () =>{
    const [details,setDetails] = useState({
        email:"",
        password:""
    })
    
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDetails({
          ...details,
          [name]: value,
        });
        e.preventDefault();
      };

      const submit = async() =>{
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: details.email, password: details.password }),
      });
      const data = await res.json();
      console.log(data);
      if(res.ok){
        localStorage.setItem("DU-Auth",data.token)
      }
        } catch (error) {
            console.log(error);
        }
      }
    
    return(
        <main className="w-screen mt-[4.7rem] h-[90vh] bg-white">
            <section className="w-[95%] h-[90%] flex flex-row justify-evenly item-center">
                <div className="w-[45%] h-[90%]">
                    <figure><Image width={500} height={700} loading="eager" src="/images/Login_page.png" alt="img"/></figure>
                </div>
                <div className="w-[45%] h-[90%] grid grid-cols-1 content-center gap-8 justify-items-center">
                    <h1 className="text-[2rem] font-semibold">Log In</h1>
                    <TextField onChange={handleInput} name="email" value={details.email} className=" w-full" variant="standard" label="Enter Email" type="email"/>
                    <TextField onChange={handleInput} name="password" value={details.password} className=" w-full" variant="standard" label="Enter Password" type="password"/>
                    <Button onClick={submit} sx={{ backgroundColor: `#af00ce` }} variant="contained">Log In</Button>
                <hr className="w-full"/>
                <div>
                <h6 className="flex flex-row my-[4px]">Don`t have any account?</h6>
                <Link className="text-blue-400" href={"/register"}>Create Account</Link>
                </div>
                </div>
            </section>
        </main>
        )
    }
    
    export default login;