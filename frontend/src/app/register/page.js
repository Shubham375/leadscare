"use client";
import { HomeContext } from "@/redux/context/HomeContext";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import Image from "next/image";
import { useState, useContext } from "react";
import * as referralCodes from "referral-codes"

const Register = () => {
  const [curComp, setCurComp] = useState("email");
  const [code, setCode] = useState("");
  const [user, setUser] = useState({
    fristname: "",
    lastname: "",
    number: "",
    email: "",
    password: "",
    age: "",
    gender: "Male",
    purchasepack: "",
  });
  const { packageCards } = useContext(HomeContext);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
 console.log(user);
    setUser({
      ...user,
      [name]: value,
    });
    e.preventDefault();
    console.log(user.gender);
  };

  const emailChecker = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/emailcheck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });
      const data = await res.json();
      console.log(res, data);
      if (res.ok) {
        setCurComp("details");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const detailsChecker = async () => {
    try {
      const { fristname, lastname, number, age, gender } = user;
      const res = await fetch("http://localhost:5000/api/auth/detailscheck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fristname,
          lastname,
          number,
          age,
          gender,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setCurComp("purchase");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const codeChecker = async() => {
    try {
        const res = await fetch("http://localhost:5000/api/auth/codecheck", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({sponsorcode:code}),
        });
        const data = await res.json();
        console.log(data);
        if(res.ok){
            setUser({
                ...user,
                sponsoremail:data.msg.email,
                sponsorname:data.msg.fristname
            })
        }
      } catch (error) {
        console.log(error);
      }
  };
  const PayNCreate = async() => {
    try {
        const createUser = {...user,refferalcode:referralCodes.generate()[0]}
        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({...createUser}),
          });
      const data = await res.json();
      console.log(data);
  } catch (error) {
    console.log(error);
  }
  };

  const RegiseterComponent = () => {
    switch (curComp) {
      case "email":
        return (
          <form className="grid grid-cols-1 content-around h-[70%] w-[80%] justify-center ">
            <TextField
              variant="standard"
              label="Email"
              value={user.email}
              onChange={handleInput}
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              variant="standard"
              label="Password"
              onChange={handleInput}
              name="password"
              value={user.password}
              type="password"
              required
            />
            <TextField
              variant="standard"
              label="Conform Password"
              type="password"
              required
            />
            <Button
              sx={{ backgroundColor: `#af00ce` }}
              type="submit"
              variant="contained"
              onClick={emailChecker}
            >
              Countinue
            </Button>
          </form>
        );

      case "details":
        return (
          <div className="grid grid-cols-1 content-around h-[100%] w-[80%] justify-center ">
            <TextField
              error={false}
              variant="standard"
              label="Frist Name"
              onChange={handleInput}
              name="fristname"
              value={user.fristname}
              type="text"
              required
            />
            <TextField
              error={false}
              variant="standard"
              label="Last Name"
              onChange={handleInput}
              name="lastname"
              value={user.lastname}
              type="text"
              required
            />
            <TextField
              error={false}
              variant="standard"
              label="Phone"
              onChange={handleInput}
              name="number"
              value={user.number}
              type="number"
              required
            />
            <TextField
              error={false}
              variant="standard"
              label="Age"
              onChange={handleInput}
              name="age"
              value={user.age}
              type="number"
              required
            />
            <TextField
              error={false}
              variant="standard"
              label="Gender"
              name="gender"
              value={user.gender}
              type="select"
              required
              select={true}
            >
              <MenuItem
                value={"Male"}
                onClick={() => setUser({ ...user, gender: "Male" })}
              >
                Male
              </MenuItem>
              <MenuItem
                value={"Female"}
                onClick={() => setUser({ ...user, gender: "Female" })}
              >
                Female
              </MenuItem>
              <MenuItem
                value={"Other"}
                onClick={() => setUser({ ...user, gender: "Other" })}
              >
                Other
              </MenuItem>
            </TextField>
            <div className="flex justify-between">
              <Button
                sx={{ backgroundColor: `#af00ce` }}
                variant="outlined"
                onClick={() => setCurComp("email")}
              >
                Back
              </Button>
              <Button
                sx={{ backgroundColor: `#af00ce` }}
                variant="contained"
                onClick={() => detailsChecker()}
              >
                Countinue
              </Button>
            </div>
          </div>
        );

      case "purchase":
        return (
          <div className="flex flex-col h-[95%] overflow-scroll">
            <div>
              <TextField
                variant="standard"
                label="Enter Code Here"
                type="text"
              />
              <Button
                sx={{ backgroundColor: `#af00ce` }}
                color="primary"
                variant="contained"
                onClick={(e) => {
                  codeChecker(e.target.value);
                }}
              >
                Apply
              </Button>
            </div>
            <div>
              <div className="flex flex-row max-sm:flex-col">
                {packageCards.map((curEle) => {
                  return (
                    <div className= {`h-[13rem] w-[13rem] m-[0.5rem] ${user.purchasepack===curEle.title.split(" ")[0].toLowerCase()?'bg-blue-500': 'bg-red-100'}`} onClick={()=>{setUser({...user,purchasepack:curEle.title.split(" ")[0].toLowerCase()})}}>
                      <Image
                        loading="lazy"
                        height={800}
                        width={900}
                        src={curEle.thumbnail}
                        alt="thumbnail"
                      />
                      <div className="flex flex-row justify-between px-[0.5rem] ">
                        <figcaption className="h-[2.5rem] w-[6rem] flex items-center justify-center font-semibold text-[1.5rem] text-[#470b42] bg-[#ffffffb7] backdrop-blur-sm  rounded-[0.8rem]">
                          {curEle.price}
                        </figcaption>
                        <figcaption>{curEle.title}</figcaption>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row justify-between">
                <Button
                  sx={{ backgroundColor: `#af00ce` }}
                  variant="outlined"
                  onClick={() => setCurComp("details")}
                >
                  Back
                </Button>
                <Button
                  sx={{ backgroundColor: `#af00ce` }}
                  variant="contained"
                  onClick={PayNCreate}
                >
                  Countinue
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <main className="shadow-lg flex h-[80vh] w-[90vw] mt-[4.7rem] m-auto p-auto flex-row bg-[#ffffffff] rounded-[1.5rem] max-sm:flex-col max-sm:h-fit">
      <div className="h-[90%] w-[45%] max-sm:h-[20rem] max-sm:w-[80vw]">
        <figure>
          <Image src={""} alt="img" />
        </figure>
      </div>
      <div className="h-[90%] w-[45%] flex flex-col justify-center items-center max-sm:h-[25rem] max-sm:w-[80vw]">
        <h2 className="font-bold">
          Step {curComp === "purchase" ? "3" : curComp === "email" ? "1" : "2"}
          /3
        </h2>
        {RegiseterComponent()}
      </div>
    </main>
  );
};

export default Register;
