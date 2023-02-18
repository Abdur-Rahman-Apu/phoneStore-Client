import React from 'react';

const AllItems = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                    <tr>

                        <td>

                            <div>
                                <div className="font-bold">Hart Hagerty</div>

                            </div>

                        </td>
                        <td>
                            <div className="avatar">
                                <div className="w-24 rounded-xl">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='productImage' />
                                </div>
                            </div>

                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn bg-boldGreen text-white btn-ghost btn-xs">Advertise</button>
                            <button className="btn btn-error text-white ml-4 btn-xs">Delete</button>
                        </th>
                    </tr>


                </tbody>


            </table>
        </div>
    );
};

export default AllItems;