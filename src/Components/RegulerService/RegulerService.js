import React from 'react';
import RegularPic from './../../Assets/Images/regularservice.jpg';

const RegulerService = () => {
    return (
        <div className="flex justify-center mt-16">
            <div className="w-4/5">
                <h1 className="mb-5 text-3xl text-center font-bold text-blue-500">Regular Service and Cleaning</h1>
                <div className="md:flex items-center justify-center border-2 rounded">
                    <div className='md:w-1/2'>
                        <img src={RegularPic} className="w-full" alt="" />
                    </div>
                    <div className="md:w-1/2 p-2">
                        <h2 className="text-xl font-bold text-blue-500">Let us take a good care of your phone</h2>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, officiis at. Sapiente debitis esse porro suscipit ea doloribus? Cum ducimus voluptates id harum sed, nulla, repudiandae nostrum autem nesciunt repellat aut. Inventore laborum explicabo animi soluta impedit at totam nesciunt, nulla delectus doloribus eveniet fugit cum consequuntur! Voluptatem, esse architecto.</p>
                        <button className="text-white mt-3 bg-blue-500 px-4 py-2 rounded">LEARN MORE</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RegulerService;