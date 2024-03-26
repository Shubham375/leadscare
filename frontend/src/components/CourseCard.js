import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ src, price, title, courses, time, studentsNo, to }) => {
    return (
        <>
            <figure>
                <Image src={src} alt="thumbnail" />
                <div>
                    <figcaption>{price}</figcaption>
                    <figcaption>LeadsCare</figcaption>
                </div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <p>{courses} Courses</p>
                        <p>{time}</p>
                    </div>
                    <h6></h6>
                    <h6>{studentsNo}</h6>
                    <h6></h6>
                    <Link href={to}>Details</Link>
                </div>
            </figure>
        </>
    )
}

export default CourseCard;