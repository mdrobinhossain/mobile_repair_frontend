import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="mt-16">
            <Link to="#navbar">
                <h3 className="text-center text-white py-3 bg-blue-300 hover:bg-blue-400">Back to top</h3>
            </Link>
            <div className="flex justify-center bg-blue-200">
                <div className="w-4/5 flex justify-between mt-4 mb-4">
                    <div>
                        <h3 className="text-gray-700 font-bold">FAQ</h3>
                        <Link to="#"><p className="text-gray-600 hover:underline mt-2">Lorem</p></Link>
                        <Link to="#"><p className="text-gray-600 hover:underline mt-2">hello Jervice</p></Link>
                        <Link to="#"><p className="text-gray-600 hover:underline mt-2">Potol alo</p></Link>
                        <Link to="#"><p className="text-gray-600 hover:underline mt-2">Jhinga Le lo</p></Link>

                    </div>
                    <div>
                        <h3 className="text-gray-700 font-bold">Connections</h3>
                        <Link to="#"><p className="text-gray-600 hover:underline mt-2">Tainaki vaijan</p></Link>
                        <Link to="#"><p className="text-gray-600 hover:underline mt-2">Tainaki momin</p></Link>
                        <Link to="#"><p className="text-gray-600 hover:underline mt-2">SSaa lele</p></Link>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-bold">Contacts</h3>
                        <Link to="#"><p className="text-gray-600 hover:underline mt-2">mdrobinhossain12@gmail.com</p></Link>
                        <Link to="#"><p className="text-gray-600 hover:underline mt-2">Phone: 880 1772784031</p></Link>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-bold">Follow Us</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;