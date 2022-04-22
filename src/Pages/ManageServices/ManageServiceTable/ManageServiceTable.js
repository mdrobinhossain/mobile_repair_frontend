import React from 'react';

const ManageServiceTable = ({service,index}) => {
    return (
        <tr className="my-2">
            <td className="flex justify-center">{index + 1}</td>
            <td>{service.name}</td>
            <td>{service.cost}</td>
            <td>
                <button className="m-1 px-1 py-2 rounded bg-yellow-300 text-white">Update</button>
                <button className="m-1 px-1 py-2 rounded bg-red-600 text-white">Delete</button>
            </td>
        </tr>
    );
};

export default ManageServiceTable;