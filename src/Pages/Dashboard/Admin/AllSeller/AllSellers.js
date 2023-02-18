import React from 'react';

const AllSellers = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
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

                        <td><div className="avatar">
                            <div className="w-24 rounded-xl">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='img' />
                            </div>
                        </div></td>

                        <td>Purple</td>
                        <th>
                            <button className="btn btn-error btn-xs">Delete</button>
                        </th>
                    </tr>






                </tbody>


            </table>
        </div>
    );
};

export default AllSellers;