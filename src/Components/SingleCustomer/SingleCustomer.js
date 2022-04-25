import React from 'react';

const SingleCustomer = ({detail,index, showAdminBar}) => {
    
    
    return (
        <tr>
            <td className="text-center">{index}</td>
            <td>{detail.name}</td>
            <td>{detail.serviceTitle}</td>
            <td>{detail.date.toString().slice(0,15)}</td>
            {!showAdminBar && <td>
                <form>
                    <button type='submit' className="bg-black text-white px-8 py-1 hover:bg-gray-600">Pay</button>
                </form>
            </td>}
            {showAdminBar && <td>
                <form>
                    <button type='submit' className="bg-black text-white px-8 py-1 hover:bg-gray-600">{detail.paymentStatus?"paid":"Not paid"}</button>
                </form>
            </td>}
        </tr>
    );
};

export default SingleCustomer;