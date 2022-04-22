import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = ({isMenuOpen, setIsMenuOpen}) => {
    return (
        <div onClick={()=>setIsMenuOpen(false)} style={{zIndex:'100'}} className={isMenuOpen? "block z-10 bg-blue-500":"hidden"} >
            <div className="w-11/12 pb-5">
                <Link className="pt-4 my-4 text-white text-center hover:underline" to="/"><div>Home</div></Link>
                <Link className="my-4 text-white text-center hover:underline" to="/dashboard"><div>Dashboard</div></Link>
                <Link className="my-4 text-white text-center hover:underline" to="/blogs"><div>Blogs</div></Link>
                <Link className="my-4 text-white text-center hover:underline" to="/contact"><div>Contact us</div></Link>
            </div>
        </div>
    );
};

export default Navigation;