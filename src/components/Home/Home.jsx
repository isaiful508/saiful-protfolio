import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => {
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Home;