import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import Category from '../Category/Category';
import Lottie from "lottie-react";
import Load from "../../../../assets/load.json"


const Categories = () => {
    const { loading } = useContext(AuthContext)

    const [error, setError] = useState("")
    const [categories, setCategories] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => setError(err.message))
    }, [])

    if (loading) {
        return <>
            <Lottie animationData={Load} loop={true} className="h-[600px]" />
        </>
    }

    return (
        <div>
            <div>
                <h1 className='text-4xl text-center mt-10 font-bold text-boldGreen'>Categories</h1>
                <p className='text-center mt-5 mb-10 dark:text-white'>Choose your desired phone at low cost with better condition</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-10 gap-10 mx-8'>
                {
                    categories && categories.map(category => <Category key={category.categoryId} category={category}></Category>)
                }
            </div>
            <div>
                {
                    !categories.length && <p className='text-3xl text-red-500 text-center'>{error}</p>
                }
            </div>
        </div>
    );
};

export default Categories;