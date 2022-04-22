import React from 'react';

const SingleCustomer = ({detail,index}) => {
    
    
    return (
        <tr>
            <td className="text-center">{index}</td>
            <td>Md. Robin Hossain</td>
            <td>{detail.serviceTitle}</td>
            <td>{detail.date.toString().slice(0,15)}</td>
            <td>
                <form>
                    <button type='submit' className="bg-black text-white px-8 py-1 hover:bg-gray-600">Pay</button>
                </form>
            </td>

        </tr>
    );
};

export default SingleCustomer;