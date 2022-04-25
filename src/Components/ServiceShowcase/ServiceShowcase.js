import React, { useEffect, useState } from 'react';
import SingleService from '../../SharedComponents/SingleService/SingleService';
import {Link} from 'react-router-dom'

const ServiceShowcase = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://murmuring-sea-11106.herokuapp.com/loadservices')
        .then(res=>res.json())
        .then(data => setServices(data));
    },[])
    
    return (
        <div className="mt-32 md:mt-0 flex justify-center">
            <div className="w-4/5">
                <h2 className='text-center text-2xl font-bold text-blue-500 mt-5'>Our Services</h2>
                <p className="text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Incidunt minus aspernatur quidem non quo </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        services.slice(0,3).map(service => <SingleService service={service} key={service._id} />)
                    }
                </div>
                <div className="w-full flex justify-center"><Link to="servicespage"><button className="my-8 bg-blue-500 px-4 py-2 rounded text-white">See Our Services</button></Link></div>
            </div>
        </div>
    );
};

export default ServiceShowcase;