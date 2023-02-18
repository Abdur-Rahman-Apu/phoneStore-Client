import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../../CustomHooks/useProduct';
import Phone from '../Phone/Phone';

const Phones = () => {
    const { id } = useParams()
    const [products] = useProduct()

    console.log(products);
    console.log(id);



    let items, category;
    if (id === '1') {

        category = 'Android'
        products ? items = products?.android : items = null

    } else if (id === '2') {

        category = 'Iphone'
        products ? items = products?.iphone : items = null

    } else if (id === '3') {

        category = "Button"
        products ? items = products?.button : items = null
    }
    console.log(items);


    return (
        <div>
            <h1 className='text-3xl capitalize text-boldGreen my-16 font-bold text-center'>{category} phones</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 justify-items-center'>
                {
                    items && items?.map((item, idx) => <Phone key={idx} item={item}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;