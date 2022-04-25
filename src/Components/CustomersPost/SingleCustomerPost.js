import React from 'react'

export default function SingleCustomerPost({detail}){
    return(
        <div className="shadow p-3 bg-gray-100">
            <h4 className="text-blue-500 font-bold mb-4">{detail.name}</h4>
            <p className="mb-4">{detail.post}</p>
            <small className="text-xsm text-gray-500">{detail.date.slice(0,15)}</small>
        </div>
    );
}