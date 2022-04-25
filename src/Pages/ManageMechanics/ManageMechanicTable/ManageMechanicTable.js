import React from 'react';

const ManageMechanicTable = ({mechanic,index}) => {
    const handleDeleteMechanic =(email) => {
        fetch('https://murmuring-sea-11106.herokuapp.com/deleteMechanic',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({email:email})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <>
        <tr className="my-2">
            <td className="text-center">{index+1}</td>
            <td>{mechanic.name}</td>
            <td>{mechanic.about}</td>
            <td>
                <button onClick={()=>{handleDeleteMechanic(mechanic.email)}} className="m-1 px-1 py-2 rounded bg-red-600 text-white">Delete</button>
            </td>
        </tr>
        </>
    );
};

export default ManageMechanicTable;