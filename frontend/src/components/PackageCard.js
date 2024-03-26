import Image from "next/image";
import Link from "next/link";

const PackageCard = ({ src, price, title, courses, time, studentsNo, to }) => {
    return (
        <>
            <div className="shadow-lg  h-[32rem] bg-white  w-[18rem] rounded-[1.5rem] overflow-hidden">

                <figure className="h-[16rem] w-[18rem] bg-red-300">
                    <Image loading="lazy" height={800} width={900} src={src} alt="thumbnail" />
                    <div className="flex flex-row justify-between px-[0.5rem] ">
                        <figcaption className="h-[2.5rem] w-[6rem] flex items-center justify-center font-semibold text-[1.5rem] text-[#470b42] bg-[#ffffffb7] backdrop-blur-sm  rounded-[0.8rem]">{price}</figcaption>
                        <figcaption>Digital Udaan</figcaption>
                    </div>
                </figure>
                <div className="h-[16rem] w-[18rem] px-[1rem] flex flex-col justify-between pb-[1rem]">
                    <h2 className="font-bold text-[1.5rem]">{title}</h2>
                    <div className="flex flex-row justify-between px-[1rem] font-bold">
                        <p>{courses} Courses</p>
                        <p>{time}</p>
                    </div>
                    <div className="px-[2rem] font-semibold">
                        <h6>Live Q&A Support</h6>
                        <h6>{studentsNo} Students Enroll</h6>
                        <h6>Digital Udaan Certificate</h6>
                    </div>
                    <Link className="h-[3rem] w-[7rem] rounded-[1rem] flex justify-center items-center text-white font-bold bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500" href={to}>Details</Link>
                </div>
            </div>
        </>
    )
}

export default PackageCard;