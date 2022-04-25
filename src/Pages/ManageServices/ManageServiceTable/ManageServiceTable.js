import React from 'react';

const ManageServiceTable = ({service,index}) => {
    const handleDeleteService = (id) =>{
        fetch("https://murmuring-sea-11106.herokuapp.com/deleteservice",{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({_id:id})
        })
        .then(res=> res.json())
        .then(data =>{
            if(data) alert("The Service has deleted")
        })
    }

    return (
        <>
        <tr className="my-2">
            <td className="text-center">{index + 1}</td>
            <td>{service.name}</td>
            <td>{service.cost}</td>
            <td>
                <button className="m-1 px-1 py-2 rounded bg-yellow-300 text-white">Update</button>
                <button onClick={()=>handleDeleteService(service._id)} className="m-1 px-1 py-2 rounded bg-red-600 text-white">Delete</button>
            </td>
        </tr>
        </>
    );
};

export default ManageServiceTable;