import Banner from "../components/Banner/Banner";
import Home from "../components/Home/Home";
import Skills from "../components/Skills/Skills";


const MainLayouts = () => {
    return (
        <div className="text-white  bg-gradient-to-r from-[#362c6a] to-[#191438]">
            <Home></Home>
            <Banner></Banner>
            <Skills></Skills>
            
        </div>
    );
};

export default MainLayouts;