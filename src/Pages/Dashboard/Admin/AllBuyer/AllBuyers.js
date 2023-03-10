import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import ShowAllBuyers from './ShowAllBuyers';

const AllBuyers = () => {

    const { data: buyers, refetch } = useQuery({
        queryKey: ['deleteBuyers'],
        queryFn: async () => {
            const response = await fetch(`https://phone-store-ten.vercel.app/users`);
            return response.json()
        }
    })

    //delete buyer 
    const handleBuyerDelete = (id) => {

        fetch(`https://phone-store-ten.vercel.app/deleteBuyer/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Deleted successfully", {
                        duration: 4000,
                        position: 'top-center'
                    })
                    refetch()
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        buyers?.customer && buyers?.customer?.map((buyer, idx) => <ShowAllBuyers key={idx} buyer={buyer} handleBuyerDelete={handleBuyerDelete}></ShowAllBuyers>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default AllBuyers;