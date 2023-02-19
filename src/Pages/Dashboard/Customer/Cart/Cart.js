import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../../Context/AuthProvider';
import CartItem from './CartItem';

const Cart = () => {

    const { user } = useContext(AuthContext)

    const { isLoading, data, refetch } = useQuery(
        {
            queryKey: ['bookedItems'],
            queryFn: async () => {
                const data = await fetch(`http://localhost:5000/user?email=${user?.email}`)
                return data.json();
            }
        }
    )
    const bookedId = data?.user?.booked;

    refetch()

    console.log(bookedId);



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
                    {
                        bookedId && bookedId?.map((item, idx) => <CartItem key={idx} item={item}></CartItem>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default Cart;