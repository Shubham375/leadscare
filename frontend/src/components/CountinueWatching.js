import Image from "next/image";

const CountinueWatching = ({src,height,width}) =>{
return(<>
    <div>
        <figure>
            <Image alt="thumbnail" src={src} height={height} width={width}/>
        </figure>
        <div>
            <p>100%</p>
            <p>Course name</p>
            <p>video title</p>
        </div>
    </div>
</>)
}

export default CountinueWatching;