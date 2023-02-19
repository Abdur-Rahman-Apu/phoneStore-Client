import React, { useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import useProduct from '../../../../CustomHooks/useProduct';
import ShowSellerItems from './ShowSellerItems';

const AllItems = () => {



    const [products] = useProduct()

    const { user, loading, setLoading } = useContext(AuthContext)
    console.log("All products", products);




    const androidData = products?.android;
    const iphoneData = products?.iphone;
    const buttonData = products?.button;

    console.log("android", androidData)


    let userProducts = [].concat(androidData?.filter(data => data?.sellerEmail === user?.email)).concat(iphoneData?.filter(data => data?.sellerEmail === user?.email)).concat(buttonData?.filter(data => data?.sellerEmail === user?.email))

    console.log("userProducts", userProducts);

    const navigate = useNavigate()

    // handle advertise
    const handleAdvertise = (id) => {
        fetch(`http://localhost:5000/advertise/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Advertise successfully", {
                        duration: 4000,
                        position: 'top-center'
                    })
                    navigate('/')
                }
            })
            .catch(error => {
                toast.error("Advertise failed", {
                    duration: 4000,
                    position: 'top-center'
                })
            })
    }


    // delete item
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteItem/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Deleted successfully", {
                        duration: 4000,
                        position: 'top-center'
                    })
                    window.location.reload()
                }
            })
            .catch(error => {
                toast.error("Error got to delete data")
            })
    }

    if (loading) {
        return 'Loading'
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userProducts && userProducts?.map((product, idx) => <ShowSellerItems key={idx} product={product} handleDelete={handleDelete} handleAdvertise={handleAdvertise}></ShowSellerItems>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default AllItems;