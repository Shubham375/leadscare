"use client"
import CountinueWatching from "@/components/CountinueWatching";
import PackageCard from "@/components/PackageCard";
import { HomeContext, useHomeContext } from "@/redux/context/HomeContext";
import Image from "next/image";
import { useContext } from "react";


export default function Home() {

  const { packageCards } = useContext(HomeContext);

  return (
    <main className="w-screen h-fit flex flex-col items-center">
      <section className=" bg-white w-[100vw] h-[80vh]  mt-[3.5rem] flex flex-row justify-center items-center ">
        <div className="py-4 w-[50%]  h-[90%] flex flex-col justify-center max-sm:w-full">
          
          <p className="mx-4 font-bold text-[#7200be]">WELCOME TO</p>

          <h4 className="text-[2rem] mt-8 font-semibold mx-9">India's Best <br /> Learning and Earning <br /> Platform</h4>
          <a href="#packages" className=" mx-12 mt-8 h-[3rem] w-[12rem] max-sm:w-[10rem] rounded-[1rem] flex justify-center items-center text-white font-bold bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500">Learn to Earn Now</a>

          <h4 className="text-[2rem] mt-8 font-semibold mx-9">Our Exclusive Packages</h4>
          <p className="mx-4 mt-8 font-bold">With our exclusive packages, now you can be assured to aquire the best knowledge and expertise from our team of experts. We belive you can empower the world with industry-leading courses.</p>

        </div>
        <div className="w-[50%] h-[90%]">
          <figure>
            <Image />
          </figure>
        </div>
      </section>
      {/* <div className="h-[17rem] w-screen bg-[#f3e3f3]  myshadowin">
        <CountinueWatching />
      </div> */}
      <section id="packages" className="h-fit w-screen">
        <div className=" flex flex-row flex-wrap justify-center">

          {
            packageCards.map((curEle)=>{
              const {id,SNo,time,price,title,courses,thumbnail}=curEle;
              
              return(
                <div key={id} className=" m-8 ">
                  <PackageCard src={thumbnail} to={'/about'} studentsNo={SNo} price={price} time={time} title={title} courses={courses}/>
                
                </div>
              )
            }
            
            )
          }
       
          </div>
        <div></div>
        <div></div>
      </section>
    </main>
  )
}
