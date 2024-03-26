"use client"
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";


const Register = () => {
    const [curComp, setCurComp] = useState("email");
    const [errorInput, setErrorInput] = useState();
    const [user, setUser] = useState({
        fristname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        purchasepack: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }

    const emailChecker = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/emailcheck",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: user.email })
                })
            const data = await res.json();
            console.log(res, data);
        } catch (error) {
            console.log(error);
        }
        setCurComp("details")
    };
    const detailsChecker = () => {
        setCurComp("purchase")
    }

    const codeChecker = (value) => {

    };
    const PayNCreate = () => {

    };

    const RegiseterComponent = () => {
        switch (curComp) {
            case "email":
                return (
                    <form className="grid grid-cols-1 content-around h-[70%] w-[80%] justify-center ">
                        <TextField sx={{ backgroundColor: `#fae0ff` }} error={false} variant="standard" label="Email" onChange={(e) => { handleInput(e) }} name="email" value={user.email} type="email" />
                        <TextField error={false} variant="standard" label="Password" onChange={handleInput} name="password" value={user.password} type="password" />
                        <TextField error={false} variant="standard" label="Conform Password" type="password" />
                        <Button sx={{ backgroundColor: `#af00ce` }} type="submit" variant="contained" onClick={emailChecker}>Countinue</Button>
                    </form>
                );

            case "details":
                return (
                    <div className="grid grid-cols-1 content-around h-[100%] w-[80%] justify-center ">
                        <TextField error={false} variant="standard" label="Frist Name" onChange={handleInput} name="fristname" value={user.fristname} type="text" />
                        <TextField error={false} variant="standard" label="Last Name" onChange={handleInput} name="lastname" value={user.lastname} type="text" />
                        <TextField error={false} variant="standard" label="Phone" onChange={handleInput} name="phone" value={user.phone} type="text" />
                        <TextField error={false} variant="standard" label="Age" onChange={handleInput} name="age" value={user.age} type="text" />
                        <TextField error={false} variant="standard" label="Gender" onChange={handleInput} name="gender" value={user.gender} type="text" />
                        <div className="flex justify-between">
                            <Button sx={{ backgroundColor: `#af00ce` }} variant="outlined" onClick={() => setCurComp("email")}>Back</Button>
                            <Button sx={{ backgroundColor: `#af00ce` }} variant="contained" onClick={() => detailsChecker()}>Countinue</Button>
                        </div>
                    </div>
                )

            case "purchase":
                return (
                    <div className="flex flex-col h-[95%] overflow-scroll">
                        <div>
                            <TextField variant="standard" label="Enter Code Here" type="text" />
                            <Button sx={{ backgroundColor: `#af00ce` }} color="primary" variant="contained" onClick={(e) => { codeChecker(e.target.value) }}>Apply</Button>
                        </div>
                        <div>
                            <div className="flex flex-row max-sm:flex-col">
                                <div className="h-[10rem] w-[10rem] m-[0.5rem] bg-red-100"></div>
                                <div className="h-[10rem] w-[10rem] m-[0.5rem] bg-red-100"></div>
                                <div className="h-[10rem] w-[10rem] m-[0.5rem] bg-red-100"></div>
                                <div className="h-[10rem] w-[10rem] m-[0.5rem] bg-red-100"></div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <Button sx={{ backgroundColor: `#af00ce` }} variant="outlined" onClick={() => setCurComp("details")}>Back</Button>
                                <Button sx={{ backgroundColor: `#af00ce` }} variant="contained" onClick={PayNCreate}>Countinue</Button>
                            </div>
                        </div>
                    </div>
                )

            default:
                break;
        }
    };

    return (
        <main className="shadow-lg flex h-[80vh] w-[90vw] mt-[4.7rem] m-auto p-auto flex-row bg-[#ffffffff] rounded-[1.5rem] max-sm:flex-col max-sm:h-fit">
            <div className="h-[90%] w-[45%] max-sm:h-[20rem] max-sm:w-[80vw]">
                <figure>
                    <Image src={''} alt="img"/>
                </figure>
            </div>
            <div className="h-[90%] w-[45%] flex flex-col justify-center items-center max-sm:h-[25rem] max-sm:w-[80vw]">
                <h2 className="font-bold">Step {curComp==="purchase"?"3":(curComp === "email"?"1":"2")}/3</h2>
                <RegiseterComponent />
            </div>
        </main>
    )
}

export default Register;