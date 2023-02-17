import React from 'react';
import { Link } from 'react-router-dom'

const Category = ({ category }) => {
    const { categoryId, categoryName, categoryImg } = category;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl dark:bg-[#1F2937] mt-10  lg:mt-0">
            <figure><img src={categoryImg} className="img-fluid" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-boldGreen">{categoryName}</h2>
                <p className='dark:text-white'>To explore details please click on the button</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${categoryId}`}><button className="btn bg-boldGreen rounded-full border-0 mt-5">Choose</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;