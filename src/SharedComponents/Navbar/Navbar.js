import React,{useState} from 'react';
import logo from './../../Assets/Images/logo.png';
import {Link} from 'react-router-dom';
import menu from './../../Assets/Icons/menu.png';
import Navigation from './Navigation/Navigation';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div id="#navbar" className="flex justify-center items-center" style={{height:'70px'}}>
                <div className="w-11/12 flex justify-between items-center">
                    <div>
                        <Link className="flex justify-center items-center" to="/">
                            <img style={{height:'50px'}} src={logo} alt="" />
                            <p className="text-3xl text-white font-bold"> Repair</p>
                        </Link>
                    </div>
                    <div className="flex items-center hidden md:block">
                        <Link className="ml-4 hover:underline text-white" to="/">Home</Link>
                        <Link className="ml-4 hover:underline text-white" to="/dashboard">Dashboard</Link>
                        <Link className="ml-4 hover:underline text-white" to="blogs">Blogs</Link>
                        <Link className="ml-4 hover:underline text-white" to="contactus">Contact us</Link>
                    </div>
                    <div className="flex items-center md:hidden">
                        <div onClick={()=>setIsMenuOpen(!isMenuOpen)} className={isMenuOpen?"flex items-center justify-center bg-gray-400":"flex items-center justify-center bg-white"} style={{width:'35px',height:'35px',borderRadius:'50%'}}>
                        <img style={{height:'20px', color:'white'}} src={menu} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        </div>
    );
};

export default Navbar;