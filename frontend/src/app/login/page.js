"use client"
import { TextField,Button } from "@mui/material";
import Image from "next/image";

const login = () =>{

    const loadImg = ({src}) => {return `${src}`};
    
    return(
        <main className="w-screen mt-[4.7rem] h-[90vh] bg-white">
            <section className="w-[95%] h-[90%] flex flex-row justify-evenly item-center">
                <div className="w-[45%] h-[90%]">
                    <figure><Image width={500} height={700} loading="eager" src="/images/Login_page.png" alt="img"/></figure>
                </div>
                <div className="w-[45%] h-[90%] grid grid-cols-1 content-center gap-8 justify-items-center">
                    <h1 className="text-[2rem] font-semibold">Log In</h1>
                    <TextField className=" w-full" variant="standard" label="Enter Code Email" type="email"/>
                    <TextField className=" w-full" variant="standard" label="Enter Code Password" type="password"/>
                    <Button sx={{ backgroundColor: `#af00ce` }} variant="contained">Log In</Button>
                </div>
            </section>
        </main>
        )
    }
    
    export default login;