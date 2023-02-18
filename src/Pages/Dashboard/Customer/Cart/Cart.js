import React from 'react';

const Cart = () => {
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
                            <div>
                                <button className="btn border-0 text-white btn-info btn-xs mr-4">Pay</button>
                                <button className="btn btn-error text-white b btn-xs">Delete</button>
                            </div>
                        </th>
                    </tr>

                </tbody>


            </table>
        </div>
    );
};

export default Cart;