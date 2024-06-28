import { Element } from "react-scroll";
import Banner from "../components/Banner/Banner";
import Contacts from "../components/Contacts/Contacts";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";


const MainLayouts = () => {
    return (
        <div className="text-white  bg-gradient-to-r from-[#362c6a] to-[#191438]">

            <Element name="homeSection">
                <Home />
            </Element>
            <Banner></Banner>

            <Element name="skillsSection">
                <Skills />
            </Element>
            <Element name="projectsSection">
                <Projects />
            </Element>
            <Element name="experienceSection">
                <Experience />
            </Element>
            <Element name="contactSection">
                <Contacts />
            </Element>

            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;