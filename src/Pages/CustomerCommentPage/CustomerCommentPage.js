import React,{useState,useEffect} from "react"
import SingleCustomerPost from "../../Components/CustomersPost/SingleCustomerPost"
import {Link} from "react-router-dom"
import logo from './../../Assets/Images/logo.png';


export default function CustomerCommentPage(){
    const [customerDetail, setCustomerDetail] = useState([])
    useEffect(()=>{
        fetch('https://murmuring-sea-11106.herokuapp.com/loadcustomerpost')
        .then(res => res.json())
        .then(data => setCustomerDetail(data))
    })
    return (
        <div>
            <div className="bg-blue-500" style={{height:'70px'}}>
                <div>
                    <Link style={{height:'70px'}} className="flex ml-4 items-center" to="/">
                        <img style={{height:'50px'}} src={logo} alt="" />
                        <p className="text-3xl text-white font-bold"> Repair</p>
                    </Link>
                </div>
            </div>
            <h3 className="text-2xl mb-8 mt-3 text-center text-blue-500">What our customers say</h3>
            <div className="flex justify-center">
                <div className="w-4/5">
                    <div className="grid grid-cols-1 gap-4">
                        {
                            customerDetail.map((detail) => {
                                if(detail.post) return <SingleCustomerPost detail={detail} dey={detail._id} />
                                return ""
                            })
                        }
                        
                    </div>
                </div>
            </div>

        </div>
    );
}