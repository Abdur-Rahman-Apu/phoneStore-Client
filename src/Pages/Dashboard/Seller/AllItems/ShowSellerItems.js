import React from 'react';

const ShowSellerItems = ({ product }) => {

    console.log(product);
    return (
        <tr>

            <td>

                <div>
                    <div className="font-bold">{product?.productName}</div>

                </div>

            </td>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img className='image-full' src={product?.productImage} alt='productImage' />
                    </div>
                </div>

            </td>
            <td>{product?.category}</td>
            <td>{product?.productPrice}</td>
            <th>
                <button className="btn bg-boldGreen text-white btn-ghost btn-xs">Advertise</button>
                <button className="btn btn-error text-white ml-4 btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ShowSellerItems;