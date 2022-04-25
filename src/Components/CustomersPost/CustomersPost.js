import React,{useState, useEffect} from 'react';
import SingleCustomerPost from './SingleCustomerPost';
import {Link} from "react-router-dom"

const CustomersPost = () => {
    const [customerDetail, setCustomerDetail] = useState([])
    useEffect(()=>{
        fetch('https://murmuring-sea-11106.herokuapp.com/loadcustomerpost')
        .then(res => res.json())
        .then(data => setCustomerDetail(data))
    })
    return (
        <div className="my-16">
            <h3 className="text-2xl mb-8 font-bold text-center text-blue-500">What our customers say</h3>
            <div className="flex justify-center">
                <div className="w-4/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            customerDetail.map((detail,i) => {
                                if(detail.post && i<=3) return <SingleCustomerPost detail={detail} dey={detail._id} />
                                return ""
                            })
                        }
                        
                    </div>
                </div>
            </div>
            <div className="text-center mt-8"><Link to="/posts" className="px-4 text-white py-2 bg-blue-500 rounded">See all posts</Link></div>
        </div>
    );
};

export default CustomersPost;