import React,{useState,useEffect} from 'react'
import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import SingleService from '../../SharedComponents/SingleService/SingleService';

const ServicesPage =()=> {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/loadservices')
        .then(res=>res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className="z-0">
            <div className="bg-gray-500" style={{height:'70px'}}>
                <Navbar />
            </div>
            <h2 className="z-0 text-center mt-3 text-2xl font-bold text-blue-500">Our Services</h2>
            <div className="flex justify-center z-0">
            <div className="z-0 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-11/12">
                {
                    services.map(service => <SingleService service={service} key={service._id}/>)
                }

            </div>
            </div>
            <Footer />
            
            
        </div>
    )
}

export default ServicesPage;