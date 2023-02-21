import React from 'react';

const SoldItem = ({ item }) => {

    return (
        <tr>

            <td>

                {item?._id}

            </td>
            <td>

                <p className='font-bold'>{item?.productInfo?.productName}</p>

            </td>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={item?.productInfo?.productImage} alt='productImage' />
                    </div>
                </div>

            </td>
            <td>{item?.productInfo?.productPrice}</td>
            <td>{item?.transactionId}</td>
            <td>{item?.buyerEmail}</td>

        </tr>
    );
};

export default SoldItem;