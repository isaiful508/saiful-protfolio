
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
          
        </div>
    );
};

export default Home;