import React from 'react';

const Category = ({ category }) => {
    const { categoryName, categoryImg } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={categoryImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <p>To explore details please click on the button</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-boldGreen rounded-full border-0 mt-5">Choose</button>
                </div>
            </div>
        </div>
    );
};

export default Category;