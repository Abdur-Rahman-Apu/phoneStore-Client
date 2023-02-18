import React, { useEffect, useState } from 'react';
import ShowAllBuyers from './ShowAllBuyers';

const AllBuyers = () => {

    const [buyers, setBuyers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setBuyers(data?.customer))
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
                        buyers && buyers?.map((buyer, idx) => <ShowAllBuyers key={idx} buyer={buyer}></ShowAllBuyers>)
                    }






                </tbody>


            </table>
        </div>
    );
};

export default AllBuyers;