import React from 'react';

const SingleMechanic = ({mechanic}) => {
    
    return (
        <div>
            <div className="flex justify-center">
                <img className="bg-yellow-200" style={{height:'150px', width:'150px',border:'2px solid blue',borderRadius:'50%'}} src={`https://murmuring-sea-11106.herokuapp.com/${mechanic.dbFilePath}`} alt="" />
            </div>
            <p className="text-center text-blue-500 font-bold ">{mechanic.name}</p>
            <p className="text-center text-gray-400">{mechanic.about}</p>
            <div className="flex justify-center">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">LEARN MORE</button>
            </div>

        </div>
    );
};

export default SingleMechanic;