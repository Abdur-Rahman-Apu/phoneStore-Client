import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../../Context/AuthProvider';
import CartItem from './CartItem';
import { toast } from 'react-hot-toast';
import Lottie from "lottie-react";
import Load from '../../../../assets/load.json'


const Cart = () => {

    const { user, loading, setLoading } = useContext(AuthContext)

    const { data: bookedId, refetch } = useQuery(
        {
            queryKey: ['bookedItems'],
            queryFn: async () => {
                const data = await fetch(`http://localhost:5000/user?email=${user?.email}`)
                return data.json();
            }
        }
    )



    //delete btn
    const handleDelete = (id) => {
        setLoading(true)

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

                    localStorage.setItem('Total-cart', localStorage.getItem('Total-cart') - 1)

                    refetch()
                    window.location.reload()

                }
            })

        setLoading(false)

    }


    if (loading) {
        return <div className='h-[300px]'>
            <Lottie animationData={Load} loop={true} />
        </div>
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