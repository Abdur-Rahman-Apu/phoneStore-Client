import React from 'react';

const ShowAllBuyers = ({ buyer }) => {
    return (
        <tr>

            <td>

                <div>
                    <div className="font-bold">{buyer?.name}</div>

                </div>

            </td>

            <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={buyer?.image} alt='img' />
                    </div>
                </div>
            </td>

            <td>{buyer?.email}</td>
            <th>
                <button className="btn btn-error btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ShowAllBuyers;