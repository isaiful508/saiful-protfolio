

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-[#362c6a] to-[#191438] h-[800px] relative">
            <div className="text-white container  dark:bg-gray-900 absolute top-36 left-32">


                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide dark:text-white lg:text-5xl poppins-bold">
                                I'm <br /> Saiful Islam <br />
                                <span className="text-2xl poppins-medium">Front End Web Developer</span>
                            </h1>
                            <p className="poppins-medium">As a web developer, I specialize in designing and maintaining websites, ensuring seamless functionality and optimal user experience using HTML, CSS,JavaScript,React.js,Node js etc.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full  lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://i.ibb.co/y5wLy1P/Saiful-formal.jpg" alt="glasses photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;