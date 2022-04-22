import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './CarouselSlider.css'
import {Link} from 'react-router-dom'

const CarouselSlider = () => {
    return (
        <div className="relative z-0">
            <Carousel 
            autoPlay
            interval={6000}
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            stopOnHover={false}
            showStatus={false}
            >
                <div className="slide1 h-screen ">
                    <div className="slidemask h-screen">
                        <div className="h-screen flex items-center justify-center">
                            <div>
                                <h1 className="text-white text-2xl">If you want to get your phone fixed permanently <br/>then you are in the right place</h1>
                                <Link to="/servicespage"><button className="bg-blue-500 text-white px-4 py-3 rounded mt-3">See Our Services</button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="slide2 h-screen ">
                    <div className="slidemask h-screen">
                        <div className="h-screen flex items-center justify-center">
                            <div>
                                <h1 className="text-white text-2xl">If you want to get your phone fixed permanently <br/>then you are in the right place</h1>
                                <Link to="/servicespage"><button className="bg-blue-500 text-white px-4 py-3 rounded mt-3">See Our Services</button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="slide3 h-screen ">
                    <div className="slidemask h-screen">
                        <div className="h-screen flex items-center justify-center">
                            <div>
                                <h1 className="text-white text-2xl">If you want to get your phone fixed permanently <br/>then you are in the right place</h1>
                                <Link to="/servicespage"><button className="bg-blue-500 text-white px-4 py-3 rounded mt-3">See Our Services</button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="slide4 h-screen ">
                    <div className="slidemask h-screen">
                        <div className="h-screen flex items-center justify-center">
                            <div>
                                <h1 className="text-white text-2xl">If you want to get your phone fixed permanently <br/>then you are in the right place</h1>
                                <Link to="/servicespage"><button className="bg-blue-500 text-white px-4 py-3 rounded mt-3">See Our Services</button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="slide5 h-screen ">
                    <div className="slidemask h-screen">
                        <div className="h-screen flex items-center justify-center">
                            <div>
                                <h1 className="text-white text-2xl">If you want to get your phone fixed permanently <br/>then you are in the right place</h1>
                                <Link to="/servicespage"><button className="bg-blue-500 text-white px-4 py-3 rounded mt-3">See Our Services</button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                

            </Carousel>
        </div>
    );
};

export default CarouselSlider;