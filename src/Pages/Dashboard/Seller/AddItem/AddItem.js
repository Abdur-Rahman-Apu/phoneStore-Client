import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const { user, loading, setLoading } = useContext(AuthContext)

    const navigate = useNavigate()

    // add item button 
    const handleItem = (data) => {
        console.log(data);

        const img = data.image[0]
        const { name, price, description, category } = data;

        const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBBkey}`
        console.log(uri);

        const formData = new FormData()
        formData.append('image', img)

        setLoading(true)
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {


                    const itemInfo = {
                        productName: name,
                        productPrice: price,
                        category,
                        description,
                        productImage: imgData.data.url,
                        sellerEmail: user.email
                    }


                    fetch(`http://localhost:5000/products`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('phone-token')}`
                        },
                        body: JSON.stringify(itemInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Product added successfully", {
                                    duration: 4000,
                                    position: 'top-center'
                                })

                                navigate('/dashboard/allItems')
                            } else {
                                toast.error("Failed to add data", {
                                    duration: 4000,
                                    position: 'top-center'
                                })
                            }
                        })
                        .catch(error => {
                            toast.error("Failed to store the product info", {
                                duration: 4000,
                                position: 'top-center'
                            })
                        })
                }
            })
            .catch(error => {
                toast.error("Image upload failed", {
                    duration: 4000,
                    position: 'top-center'
                })
            })


        setLoading(false)

        if (loading) {
            return "Loading"
        }
    }

    return (
        <div>
            <h1 className='text-xl font-bold text-boldGreen text-center'>Add item</h1>
            <div>

                <form onSubmit={handleSubmit(handleItem)}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-boldGreen dark:text-white">Name</label>
                        <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" {...register("name", { required: "Product Name is required" })} />
                        {errors.name?.type === 'required' && <p className='text-red-500' role="alert">{errors.name.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="label">
                            <span className="label-text text-boldGreen font-bold dark:text-white">Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" {...register('image', { required: "Image is required" })} />
                        {errors.image?.type === 'required' && <p className='text-red-500' role="alert">{errors?.image?.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="label">
                            <span className="label-text text-boldGreen font-bold">Category</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs" {...register("category", { required: "Category is required" })}>
                            <option>Android</option>
                            <option>Iphone</option>
                            <option>Button</option>
                        </select>

                        {errors.category?.type === 'required' && <p className='text-red-500 mt-3' role="alert">{errors.category.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-boldGreen dark:text-white">Price</label>
                        <input type="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='10' {...register('price', { required: "Price is required" })} />
                        {errors.price?.type === 'required' && <p className='text-red-500' role="alert">{errors.price.message}</p>}
                    </div>
                    <div className="mb-6">

                        <label htmlFor="description" className="block mb-2 text-sm font-bold text-boldGreen  dark:text-white">Description</label>
                        <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product description" {...register('description', { required: "Description is required" })}></textarea>
                        {errors.description?.type === 'required' && <p className='text-red-500' role="alert">{errors.description.message}</p>}
                    </div>

                    <button type="submit" className="text-white bg-boldGreen hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default AddItem;