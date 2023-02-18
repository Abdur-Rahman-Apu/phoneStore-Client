import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const CartItem = ({ item }) => {

    const [product, setProduct] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/product/${item?.productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [item?.productId])

    const handlePayBtn = () => {
        console.log("Clicked");
        navigate("/dashboard/payment", { state: { data: item } })
    }



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
                        <img src={product?.productImage} alt='productImage' />
                    </div>
                </div>

            </td>
            <td>{product?.productPrice}</td>
            <th>
                <div>
                    <button onClick={handlePayBtn} className="btn border-0 text-white btn-info btn-xs mr-4">Pay</button>
                    <button className="btn btn-error text-white b btn-xs">Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default CartItem;