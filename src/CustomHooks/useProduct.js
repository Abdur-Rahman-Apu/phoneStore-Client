import { useEffect, useState } from 'react';

const useProduct = () => {

    const [products, setProducts] = useState(null)



    useEffect(() => {
        fetch(`https://phone-store-ten.vercel.app/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return [products]
};

export default useProduct;