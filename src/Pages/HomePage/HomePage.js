import React from 'react';
import CarouselSlider from '../../Components/CarouselSlider/CarouselSlider';
import CustomersPost from '../../Components/CustomersPost/CustomersPost';
import MechnicPost from '../../Components/MechanicPost/MechnicPost';
import OurMechanics from '../../Components/OurMechanics/OurMechanics';
import RegulerService from '../../Components/RegulerService/RegulerService';
import ServiceShowcase from '../../Components/ServiceShowcase/ServiceShowcase';
import Stickers from '../../Components/Stickers/Stickers';
import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';

const HomePage = () => {
    return (
        <div>
            <div className='z-10 w-full absolute'>
                <Navbar />
            </div>
            
            <CarouselSlider />
            <div className='z-10 w-full absolute -bottom-32 md:bottom-0'>
                <Stickers />
            </div>
            <ServiceShowcase />
            <RegulerService />
            <CustomersPost />
            <OurMechanics />
            <MechnicPost />
            <Footer />
        </div>
    );
};

export default HomePage;