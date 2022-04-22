import React, { useEffect, useState } from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';
import ManageMechanicTable from './ManageMechanicTable/ManageMechanicTable';

const ManageMechanics = () => {
    const [mechanics, setMechanics] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/loadmechanics')
        .then(res => res.json())
        .then(data => setMechanics(data))
    },[])
    return (
        <div className="md:flex">
            <Sidebar />
            <div className="bg-blue-100 md:w-3/4">
            <div className="text-2xl py-2 px-4 font-bold">Manage Mechanics</div>
            <div className="w-full p-4">
                <table className="w-full bg-gray-300 rounded">
                    <tr>
                        <th>Sr. No</th>
                        <th className="text-left">Name</th>
                        <th className="text-left">about</th>
                        <th className="text-left">Action</th>
                    </tr>
                    {
                        mechanics.map((mechanic,index) => <ManageMechanicTable mechanic={mechanic} index={index} key={mechanic._id}/>)
                    }
                </table>
            </div>
            </div>
        </div>
    );
};

export default ManageMechanics;