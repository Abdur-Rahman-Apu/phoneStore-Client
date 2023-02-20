import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ShowAllSellers from './ShowAllSellers';

const AllSellers = () => {
    const [sellers, setSellers] = useState([])

    const { data, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/users`);
            return data.json()
        }
    })



    // useEffect(() => {
    //     fetch(`http://localhost:5000/users`)
    //         .then(res => res.json())
    //         .then(data => setSellers(data?.seller))
    // }, [])

    const handleDeleteSeller = (id) => {


        fetch(`http://localhost:5000/deleteSeller/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Deleted Successfully", {
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
                        data?.seller && data?.seller?.map((seller, idx) => <ShowAllSellers key={idx} seller={seller} handleDeleteSeller={handleDeleteSeller}></ShowAllSellers>)
                    }






                </tbody>


            </table>
        </div>
    );
};

export default AllSellers;