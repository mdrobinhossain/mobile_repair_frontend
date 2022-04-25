import React,{useState, useEffect} from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import ManageServiceTable from './ManageServiceTable/ManageServiceTable';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://murmuring-sea-11106.herokuapp.com/loadservices')
        .then(res=>res.json())
        .then(data => setServices(data));
    },[services])
    return (
        <div className="md:flex">
            <Sidebar />
            <div className="bg-blue-100 md:w-3/4">
            <div className="text-2xl py-2 px-4 font-bold">Manage Services</div>
            <div className="w-full p-4">
                <table className="w-full bg-gray-300 rounded">
                    <tr>
                        <th>Sr. No</th>
                        <th className="text-left">Caption</th>
                        <th className="text-left">Price</th>
                        <th className="text-left">Action</th>
                    </tr>
                    {
                        services.map((service,index) => <ManageServiceTable service={service} index={index} key={service._id}/>)
                    }
                </table>
            </div>
            </div>
        </div>
    );
};

export default ManageServices;