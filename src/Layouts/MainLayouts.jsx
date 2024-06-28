import Banner from "../components/Banner/Banner";
import Contacts from "../components/Contacts/Contacts";
import Experience from "../components/Experience/Experience";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";


const MainLayouts = () => {
    return (
        <div className="text-white  bg-gradient-to-r from-[#362c6a] to-[#191438]">
            <Home></Home>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>
            <Contacts></Contacts>
            
        </div>
    );
};

export default MainLayouts;