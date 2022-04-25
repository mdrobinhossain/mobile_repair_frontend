import React,{useState, useEffect, useContext} from 'react';
import SingleCustomer from '../../Components/SingleCustomer/SingleCustomer';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import {userContext} from './../../App';

const Dashboard = () => {
    const [customerDetail, setCustomerDetail] = useState([]);
    const [loggedInUser] = useContext(userContext)
    const [customerWithComponent,setCustomerWithComponent] = useState({})


    const [showAdminBar,setShowAdminbar] = useState(false)

    useEffect(()=>{
        fetch("https://murmuring-sea-11106.herokuapp.com/loadmechanics")
        .then(res=>res.json())
        .then(mechanics=>{
            for(let i=0;i<mechanics.length;i++){
                if(mechanics[i].email === loggedInUser.email){
                    setShowAdminbar(true);
                    break;
                }
            }
        })
    },[showAdminBar,loggedInUser])


    useEffect(()=>{
        fetch("https://murmuring-sea-11106.herokuapp.com/loadcustomer",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(loggedInUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.length>0){
                setCustomerDetail(data)
            }else{
                setShowAdminbar(false);
            }
        })

    },[customerDetail,loggedInUser])


    const handleBlur = (e) => {
        const newCustomerWithComment = {...customerWithComponent};
        newCustomerWithComment[e.target.name] = e.target.value;
        setCustomerWithComponent(newCustomerWithComment);
    }
    const handleCustomerPost = (customer, post,e) => {
        const updatedCustomer = {...customer,post:post};
        const customerQuary = {
            email:customer.email,
            date:customer.date
        }
        fetch("https://murmuring-sea-11106.herokuapp.com/customerpost",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({updatedCustomer:updatedCustomer,customerQuary})

        })
        .then(res =>res.json())
        .then(data => {
            if(data){
                alert("Comment has been posted. Thanks for Your feedback")
            }
        })
    }
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
                        customerDetail.map((detail,index) => <SingleCustomer detail={detail} index={index+1} showAdminBar={showAdminBar} key={detail._id} />)
                    }
                    
                </table>
                {!showAdminBar && <form onSubmit={(e)=>{e.preventDefault();handleCustomerPost(customerDetail[0],customerWithComponent.post)}}  className="pt-4">
                    <textarea required onBlur={handleBlur} className="p-2 rounded" name="post" id="" cols="50" rows="5" placeholder='Comment about our Service'></textarea><br />
                    <input type="submit" className='px-4 py-2 bg-blue-500 text-white rounded'/>
                </form>}
            </div>
            </div>
        </div>
    );
};

export default Dashboard;