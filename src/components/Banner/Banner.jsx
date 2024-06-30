import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import next from '../../assets/next.png'
import cv from '../../assets/resume_full-stack.pdf'
import { MdFileDownload } from 'react-icons/md'
import 'animate.css';




// const cv="https://drive.google.com/file/d/1xObiT4Bga7ko0K500llIop6FhWDqG0Rj/view?usp=sharing"

const Banner = () => {
    return (
        <div className="h-[800px] container mx-auto pt-10 lg:pt-24">
            <div className="text-white container dark:bg-gray-900 top-36 left-32">

                <div className="container flex flex-col justify-between items-center px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide dark:text-white lg:text-5xl poppins-bold">
                                I'm <br /> <span className='animate__shakeX'>Saiful Islam</span> <br />
                                <span className="text-2xl poppins-medium">Front End Web Developer</span>
                            </h1>
                            <p className="poppins-regular mt-2">As a web developer, I specialize in designing and maintaining websites, ensuring seamless functionality and optimal user experience using HTML, CSS,Tailwind CSS, Boostrap, JavaScript,React.js,Node js,Next js, Mongodb etc.</p>
                        </div>
                        <div className='flex items-center gap-2 lg:gap-5 mt-4'>
                            <div className='transition-transform transform hover:scale-110'>
                                <img className='lg:h-[60px] w-[60px]' src={html} alt="html_logo" />
                            </div>
                            <div className='transition-transform transform hover:scale-110'>
                                <img className='lg:h-[60px] w-[60px]' src={css} alt="css_logo" />
                            </div>
                            <div className='transition-transform transform hover:scale-110'>
                                <img className='lg:h-[60px] w-[60px]' src={js} alt="js_logo" />
                            </div>
                            <div className='transition-transform transform hover:scale-110'>
                                <img className='lg:h-[60px] w-[60px]' src={react} alt="react_logo" />
                            </div>
                            <div className='transition-transform transform hover:scale-110'>
                                <img className='lg:h-[60px] w-[60px]' src={node} alt="node_logo" />
                            </div>
                            <div className='transition-transform transform hover:scale-110'>
                                <img className='lg:h-[60px] w-[60px]' src={mongo} alt="mongo_logo" />
                            </div>
                            <div className='transition-transform transform hover:scale-110'>
                                <img className='lg:h-[60px] w-[60px]' src={next} alt="next_logo" />
                            </div>
                        </div>
                        <a href={cv} download="resume.pdf">

                            <button className='btn mt-4 uppercase bg-[#392e6d] text-white hover:bg-[#a38cfa] border border-[#a38cfa] poppins-regular '><MdFileDownload className='text-xl' /> Get Resume</button>
                        </a>
                    </div>

                    <div
                        data-aos="fade-down"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                        className="flex items-center justify-center w-full  lg:w-1/2">
                        <img  className="object-cover transition-transform transform hover:scale-110 w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://i.ibb.co/2hnr06S/profile-pic-1.png" alt="profile_pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;