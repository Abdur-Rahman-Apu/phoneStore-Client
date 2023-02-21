import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import SoldItem from './SoldItem';

const SoldItems = () => {

    const [soldItems, setSoldItems] = useState([])

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://phone-store-ten.vercel.app/allPaid?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSoldItems(data))
    }, [user?.email])
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Payment id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Transaction id</th>
                        <th>Buyer Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        soldItems && soldItems?.map((item, idx) => <SoldItem key={idx} item={item}></SoldItem>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default SoldItems;