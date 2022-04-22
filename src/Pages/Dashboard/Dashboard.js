import React,{useState, useEffect, useContext} from 'react';
import SingleCustomer from '../../Components/SingleCustomer/SingleCustomer';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import {userContext} from './../../App';

const Dashboard = () => {
    const [customerDetail, setCustomerDetail] = useState([]);
    const [loggedInUser] = useContext(userContext)


    useEffect(()=>{
        fetch("http://localhost:5000/loadcustomer",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(loggedInUser)
        })
        .then(res => res.json())
        .then(data => setCustomerDetail(data))

    },[])
    return (
        <div className="md:flex">
            <Sidebar />
            <div className="bg-blue-100 md:w-3/4">
            <div className="text-2xl py-2 px-4 font-bold">Dashboard</div>
            <div className="w-full p-4">
                <table className="w-full bg-gray-300 rounded">
                    <tr>
                        <th>Sr. No</th>
                        <th className="text-left">Name</th>
                        <th className="text-left">Service</th>
                        <th className="text-left">Date</th>
                        <th className="text-left">Payment Status</th>
                    </tr>
                    {
                        customerDetail.map((detail,index) => <SingleCustomer detail={detail} index={index} key={detail._id} />)
                    }
                    
                </table>
                <form className="pt-4">
                    <textarea className="p-2 rounded" name="Comment" id="" cols="50" rows="5" placeholder='Comment about our Service'></textarea><br />
                    <input type="submit" className='px-4 py-2 bg-blue-500 text-white rounded'/>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;