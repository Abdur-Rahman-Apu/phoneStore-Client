import React, { useEffect, useState } from 'react';
import ShowAllSellers from './ShowAllSellers';

const AllSellers = () => {
    const [sellers, setSellers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setSellers(data?.seller))
    }, [])
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
                        sellers && sellers?.map((seller, idx) => <ShowAllSellers key={idx} seller={seller}></ShowAllSellers>)
                    }






                </tbody>


            </table>
        </div>
    );
};

export default AllSellers;