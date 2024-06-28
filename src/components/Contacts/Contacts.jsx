

const Contacts = () => {
    return (
        <div className="container mx-auto mt-10 p-10 border border-[#a38cfa] rounded-lg shadow-xl bg-[#392e6d] text-white">
        <h3 className="text-4xl text-center mb-10 poppins-medium">I WANT TO HEAR FROM YOU</h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div>
                <form>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="name">Your Name</label>
                        <input 
                            className="w-full p-3 rounded border border-[#a38cfa] bg-[#2d254e] text-white" 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Your Name" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">Your Email</label>
                        <input 
                            className="w-full p-3 rounded border border-[#a38cfa] bg-[#2d254e] text-white" 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your Email" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="phone">Your Phone</label>
                        <input 
                            className="w-full p-3 rounded border border-[#a38cfa] bg-[#2d254e] text-white" 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            placeholder="Your Phone" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="subject">Subject</label>
                        <input 
                            className="w-full p-3 rounded border border-[#a38cfa] bg-[#2d254e] text-white" 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            placeholder="Subject" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="message">Message</label>
                        <textarea 
                            className="w-full p-3 rounded border border-[#a38cfa] bg-[#2d254e] text-white" 
                            id="message" 
                            name="message" 
                            rows="5" 
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 rounded bg-[#a38cfa] text-[#392e6d] uppercase font-bold hover:bg-[#7a63d1] transition-colors duration-300"
                    >
                        Send Me Message
                    </button>
                </form>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                    <div className="bg-[#a38cfa] rounded-full p-3 mr-4">
                        <span className="text-2xl">&#x1F4CD;</span>
                    </div>
                    <div>
                        <p className="text-lg">Address</p>
                        <p>202 Dog Hill Lane Beloit, KS 67420</p>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="bg-[#a38cfa] rounded-full p-3 mr-4">
                        <span className="text-2xl">&#x260E;</span>
                    </div>
                    <div>
                        <p className="text-lg">Phone</p>
                        <p>+01589634755</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="bg-[#a38cfa] rounded-full p-3 mr-4">
                        <span className="text-2xl">&#x2709;</span>
                    </div>
                    <div>
                        <p className="text-lg">Email</p>
                        <p>credesign@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contacts;