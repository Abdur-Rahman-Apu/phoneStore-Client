import React from 'react';

const BuyedProduct = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Seller</th>
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
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </th>
                    </tr>






                </tbody>


            </table>
        </div>
    );
};

export default BuyedProduct;