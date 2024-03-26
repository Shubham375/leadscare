import Image from "next/image";

const contact = () =>{
    return(
        <main>
            <section>
                <div>
                    <figure><Image/></figure>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <input type="email" placeholder="Enter your Email"/>
                    <textarea placeholder="Type your Massege"/>
                    <button>Send</button>
                </div>
            </section>
        </main>
        )
};


export default contact;