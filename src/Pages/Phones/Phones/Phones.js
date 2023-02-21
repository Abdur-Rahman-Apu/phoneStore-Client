import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useProduct from '../../../CustomHooks/useProduct';
import Phone from '../Phone/Phone';
import Lottie from "lottie-react";
import Load from "../../../assets/load.json"
import ReactPaginate from 'react-paginate';
import './Phones.css'

const Phones = () => {
    const { id } = useParams()
    const [products] = useProduct()

    const { loading } = useContext(AuthContext)

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

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 3

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items?.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items?.length;
        setItemOffset(newOffset);
    }

    if (loading) {
        return <>
            <Lottie animationData={Load} loop={true} className="h-[600px]" />
        </>
    }

    return (
        <div>
            <h1 className='text-3xl capitalize text-boldGreen my-16 font-bold text-center'>{category} phones</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 justify-items-center'>
                {
                    currentItems && currentItems?.map((item, idx) => <Phone key={idx} item={item} ></Phone>)
                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                containerClassName="paginate-container"
                pageLinkClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active-btn'
            />
        </div>
    );
};

export default Phones;