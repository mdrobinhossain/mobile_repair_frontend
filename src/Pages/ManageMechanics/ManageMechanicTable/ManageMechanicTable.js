import React from 'react';

const ManageMechanicTable = ({mechanic,index}) => {
    return (
        <tr className="my-2">
            <td className="flex justify-center">{index}</td>
            <td>{mechanic.name}</td>
            <td>{mechanic.about}</td>
            <td>
                <button className="m-1 px-1 py-2 rounded bg-red-600 text-white">Delete</button>
            </td>
        </tr>
    );
};

export default ManageMechanicTable;