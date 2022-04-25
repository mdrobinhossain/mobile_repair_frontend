import React,{useEffect,useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import dashicon from '../../Assets/Icons/dashboard.png'; 
import addService from './../../Assets/Icons/support.png'
import manageService from './../../Assets/Icons/edit.png'
import addDoctor from './../../Assets/Icons/add-user.png'
import amanageDoctor from './../../Assets/Icons/team.png'
import logout from './../../Assets/Icons/switch.png'
import {userContext} from './../../App';



const Sidebar = () => {
    const [showAdminBar,setShowAdminbar] = useState(false)
    const [loggedInUser,setLoggedInUser] = useContext(userContext)

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
    },[showAdminBar,loggedInUser.email])
    return (
        <div className="md:w-1/4 w-screen md:h-screen bg-blue-300">
            <div className="pt-7 pb-6 relative md:h-screen">
                <Link  to='/dashboard' className="py-2 hover:bg-blue-200 flex items-center">
                    <div className="bg-white ml-3 flex items-center justify-center" style={{height:'30px',width:'30px',borderRadius:'50%'}}>
                        <img style={{height:'20px'}} src={dashicon} alt="" />
                    </div>
                    <div className="text-xl text-white ml-2">Dashboard</div>
                </Link>
                {showAdminBar && <Link to="/dashboard/addservice" className="py-2 hover:bg-blue-200 flex items-center">
                    <div className="bg-white ml-3 flex items-center justify-center" style={{height:'30px',width:'30px',borderRadius:'50%'}}>
                        <img style={{height:'22px'}} src={addService} alt="" />
                    </div>
                    <div className="text-xl text-white ml-2">Add A Service</div>
                </Link>}
                {showAdminBar && <Link to="/dashboard/manageservice" className="py-2 hover:bg-blue-200 flex items-center">
                    <div className="bg-white ml-3 flex items-center justify-center" style={{height:'30px',width:'30px',borderRadius:'50%'}}>
                        <img style={{height:'20px'}} src={manageService} alt="" />
                    </div>
                    <div className="text-xl text-white ml-2">Manage Service</div>
                </Link>}
                {showAdminBar && <Link to="/dashboard/addmechanic" className="py-2 hover:bg-blue-200 flex items-center" >
                    <div className="bg-white ml-3 flex items-center justify-center" style={{height:'30px',width:'30px',borderRadius:'50%'}}>
                        <img style={{height:'20px'}} src={addDoctor} alt="" />
                    </div>
                    <div className="text-xl text-white ml-2">Add A Mechanic</div>
                </Link>}
                {showAdminBar && <Link to="/dashboard/managemechanic" className="py-2 hover:bg-blue-200 flex items-center" >
                    <div className="bg-white ml-3 flex items-center justify-center" style={{height:'30px',width:'30px',borderRadius:'50%'}}>
                        <img style={{height:'25px'}} src={amanageDoctor} alt="" />
                    </div>
                    <div className="text-xl text-white ml-2">Manage Mechanics</div>
                </Link>}
                <button onClick={()=>setLoggedInUser({})} className="md:absolute md:bottom-10 mt-4 ml-4 flex items-center bg-orange-400 hover:bg-orange-300 px-4 py-2 hover:rounded">
                    <img  className="mr-1" style={{height:'20px'}} src={logout} alt="" /> Log Out
                </button>
            </div>
        </div>
    );
};

export default Sidebar;