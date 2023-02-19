import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../../Context/AuthProvider';
import CartItem from './CartItem';
import { toast } from 'react-hot-toast';


const Cart = () => {

    const { user, loading } = useContext(AuthContext)

    const { data: bookedId, refetch } = useQuery(
        {
            queryKey: ['bookedItems'],
            queryFn: async () => {
                console.log("Refetch");
                const data = await fetch(`http://localhost:5000/user?email=${user?.email}`)
                return data.json();
            }
        }
    )


    console.log(bookedId.user.booked);






    //delete btn
    const handleDelete = (id) => {


        fetch(`http://localhost:5000/deleteCartItem?productId=${id}&email=${user?.email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Deleted successfully', {
                        duration: 4000,
                        position: 'top-center'
                    })

                    refetch()

                }
            })



    }


    if (loading) {
        return "Loading"
    }
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
                        bookedId && bookedId?.user?.booked?.map((item, idx) => <CartItem key={idx} item={item} handleDelete={handleDelete}></CartItem>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default Cart;