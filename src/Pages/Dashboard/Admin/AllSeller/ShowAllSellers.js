import React from 'react';

const ShowAllSellers = ({ seller }) => {
    return (
        <tr>

            <td>

                <div>
                    <div className="font-bold">{seller?.name}</div>

                </div>

            </td>

            <td><div className="avatar">
                <div className="w-24 rounded-xl">
                    <img src={seller?.image} alt='img' />
                </div>
            </div></td>

            <td>{seller?.email}</td>
            <th>
                <button className="btn btn-error btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ShowAllSellers;