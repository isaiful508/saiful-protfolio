import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import next from '../../assets/next.png'
import cv from '../../assets/resume_full-stack.pdf'
import { MdFileDownload } from 'react-icons/md'

// const cv="https://drive.google.com/file/d/1xObiT4Bga7ko0K500llIop6FhWDqG0Rj/view?usp=sharing"

const Banner = () => {
    return (
        <div className="h-[800px] lg:relative">
            <div className="text-white container  dark:bg-gray-900 lg:absolute top-36 left-32">


                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide dark:text-white lg:text-5xl poppins-bold">
                                I'm <br /> Saiful Islam <br />
                                <span className="text-2xl poppins-medium">Front End Web Developer</span>
                            </h1>
                            <p className="poppins-regular mt-2">As a web developer, I specialize in designing and maintaining websites, ensuring seamless functionality and optimal user experience using HTML, CSS,Tailwind CSS, Boostrap, JavaScript,React.js,Node js,Next js, Mongodb etc.</p>
                        </div>
                        <div className='flex items-center gap-5 mt-4'>
                            <div>
                                <img className='h-[60px] w-[60px]' src={html} alt="html_logo" />
                            </div>
                            <div>
                                <img className='h-[60px] w-[60px]' src={css} alt="html_logo" />
                            </div>
                            <div>
                                <img className='h-[60px] w-[60px]' src={js} alt="html_logo" />
                            </div>
                            <div>
                                <img className='h-[60px] w-[60px]' src={react} alt="html_logo" />
                            </div>
                            <div>
                                <img className='h-[60px] w-[60px]' src={node} alt="html_logo" />
                            </div>
                            <div>
                                <img className='h-[60px] w-[60px]' src={mongo} alt="html_logo" />
                            </div>
                            <div>
                                <img className='h-[60px] w-[60px]' src={next} alt="html_logo" />
                            </div>

                        </div>
                        <a href={cv} download="resume.pdf">
                        
                        <button className='btn mt-4 uppercase bg-[#392e6d] text-white hover:bg-[#a38cfa] border border-[#a38cfa] poppins-regular '><MdFileDownload className='text-xl' /> Get Resume</button>
                        </a>
                    </div>

                    <div className="flex items-center justify-center w-full  lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://i.ibb.co/GkMWL54/Saiful-formal-removebg-preview.png" alt="profile_pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;