import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import {  IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Contacts = () => {
    return (
        <div className="container mx-auto mt-20 p-10 border border-[#a38cfa] rounded-lg shadow-xl bg-[#392e6d] text-white">
        <h3 className="text-4xl text-center mb-10 poppins-medium">Let's Get In Touch</h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div>
                <form className="poppins-medium">
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="name">Your Name</label>
                        <input 
                            className="w-full p-3  rounded border border-[#a38cfa] bg-[#2d254e] text-white" 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Your Name"
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 " htmlFor="email">Your Email</label>
                        <input 
                            className="w-full p-3 rounded border border-[#a38cfa] bg-[#2d254e] text-white" 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your Email"
                            required
                        />
                    </div>
                   
                    
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="message">Message</label>
                        <textarea 
                            className="w-full h-[120px] p-3 rounded border border-[#a38cfa] bg-[#2d254e] text-white" 
                            id="message" 
                            name="message" 
                            rows="5" 
                            placeholder="Message"
                            required
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 rounded bg-[#392e6d] text-white uppercase poppins-medium hover:bg-[#a38cfa] border border-[#a38cfa] transition-colors duration-300"
                    >
                        Send Me Message
                    </button>
                </form>
            </div>
            <div className="flex flex-col ml-10 poppins-regular space-y-6">
                <div className="flex items-center mb-4">
                    <div className="rounded-full p-3 mr-4">
                    <IoLocationSharp className="text-xl" />
                    </div>
                    <div>
                        <p className="text-xl poppins-medium">Address</p>
                        <p>Rajbari District, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <div className=" rounded-full p-3 mr-4">
                    <FaPhoneAlt className="text-xl " />
                    </div>
                    <div>
                        <p className="text-xl poppins-medium">Phone</p>
                        <p>+8801742004508</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className=" rounded-full p-3 mr-4">
                    <MdEmail className="text-xl " />
                    </div>
                    <div>
                        <p className="text-xl poppins-medium poppins-medium">Email</p>
                        <p>isaiful.islam508@gmail.com</p>
                    </div>
                </div>
                {/* social link */}
                <div className="flex gap-6">
            <a className="transition-transform transform hover:scale-110" href="https://www.linkedin.com/in/isaiful-islam/" target="_blank"><FaLinkedin className="text-4xl" /></a>
            <a className="transition-transform transform hover:scale-110" href="https://github.com/isaiful508" target="_blank"><FaGithub className="text-4xl" /></a>
            <a className="transition-transform transform hover:scale-110" href="https://www.facebook.com/saiful508" target="_blank"><FaFacebook className="text-4xl" /></a>
            <a className="transition-transform transform hover:scale-110" href="https://www.instagram.com/saiful.ashh/" target="_blank"><BsInstagram className="text-4xl" /></a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contacts;