import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import DisplayBuyedProduct from './DisplayBuyedProduct';

const BuyedProduct = () => {

    const { user } = useContext(AuthContext)

    const [bought, setBought] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/boughtItem?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBought(data))
    }, [user?.email])
    console.log(bought);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Transaction Id</th>
                        <th>Seller</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bought && bought?.map((item, idx) => <DisplayBuyedProduct key={idx} item={item}></DisplayBuyedProduct>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default BuyedProduct;