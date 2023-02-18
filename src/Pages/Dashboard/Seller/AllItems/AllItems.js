import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import useProduct from '../../../../CustomHooks/useProduct';
import ShowSellerItems from './ShowSellerItems';

const AllItems = () => {



    const [products] = useProduct()

    const { user, loading, setLoading } = useContext(AuthContext)
    console.log(products);




    const androidData = products?.android;
    const iphoneData = products?.iphone;
    const buttonData = products?.button;

    console.log("android", androidData)


    const userProducts = [].concat(androidData?.filter(data => data?.sellerEmail === user?.email)).concat(iphoneData?.filter(data => data?.sellerEmail === user?.email)).concat(buttonData?.filter(data => data?.sellerEmail === user?.email))

    console.log(userProducts);

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
                        userProducts && userProducts?.map((product, idx) => <ShowSellerItems key={idx} product={product}></ShowSellerItems>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default AllItems;