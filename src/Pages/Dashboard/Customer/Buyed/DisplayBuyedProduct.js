import React from 'react';

const DisplayBuyedProduct = ({ item }) => {

    return (
        <tr>
            <td>{item?._id}</td>
            <td>

                {
                    item?.productInfo?.productName
                }

            </td>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={item?.productInfo?.productImage} alt="product" />
                    </div>
                </div>

            </td>
            <td>{item?.productInfo?.productPrice}</td>
            <td>{item?.transactionId}</td>
            <td>
                {item?.productInfo?.sellerEmail}
            </td>
        </tr>
    );
};

export default DisplayBuyedProduct;