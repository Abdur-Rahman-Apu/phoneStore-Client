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

        const img = data.image[0]
        const { name, price, description, category, display, ram, rom, sim, battery } = data;

        const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBBkey}`

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
                        displaySize: display,
                        ram,
                        rom,
                        sim,
                        battery,
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
                    <div className="mb-6 flex flex-col md:flex-row justify-between">
                        {/* price  */}
                        <div>
                            <label htmlFor="price" className="block mb-2 text-sm font-bold text-boldGreen dark:text-white">Price</label>
                            <input type="number" name='price' id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='10' {...register('price', { required: "Price is required" })} />
                            {errors.price?.type === 'required' && <p className='text-red-500' role="alert">{errors.price.message}</p>}
                        </div>
                        {/* display */}
                        <div>
                            <label htmlFor="display" className="block mb-2 text-sm font-bold text-boldGreen dark:text-white">Display</label>
                            <input type="text" name='display' id="display" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='display size...' {...register('display', { required: "Display size is required" })} />
                            {errors.display?.type === 'required' && <p className='text-red-500' role="alert">{errors.display.message}</p>}
                        </div>
                        {/* ram  */}
                        <div>
                            <label htmlFor="ram" className="block mb-2 text-sm font-bold text-boldGreen dark:text-white">RAM</label>
                            <input type="text" name='ram' id="ram" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter RAM' {...register('ram', { required: "Ram is required" })} />
                            {errors.ram?.type === 'required' && <p className='text-red-500' role="alert">{errors.ram.message}</p>}
                        </div>

                    </div>
                    <div className="mb-6 flex flex-col md:flex-row justify-between">

                        {/* rom  */}
                        <div>
                            <label htmlFor="rom" className="block mb-2 text-sm font-bold text-boldGreen dark:text-white">ROM</label>
                            <input type="text" name='rom' id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter ROM' {...register('rom', { required: "rom is required" })} />
                            {errors.rom?.type === 'required' && <p className='text-red-500' role="alert">{errors.rom.message}</p>}
                        </div>
                        {/* sim  */}
                        <div>
                            <label htmlFor="sim" className="block mb-2 text-sm font-bold text-boldGreen dark:text-white">Sim</label>
                            <input type="text" name='sim' id="sim" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='single or dual' {...register('sim', { required: "Sim is required" })} />
                            {errors.sim?.type === 'required' && <p className='text-red-500' role="alert">{errors.sim.message}</p>}
                        </div>

                        {/* battery */}

                        <div>
                            <label htmlFor="battery" className="block mb-2 text-sm font-bold text-boldGreen dark:text-white">Battery</label>
                            <input type="text" name='battery' id="battery" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter battery capacity...' {...register('battery', { required: "Battery is required" })} />
                            {errors.battery?.type === 'required' && <p className='text-red-500' role="alert">{errors.battery.message}</p>}
                        </div>
                    </div>

                    <button type="submit" className=" mt-5 text-white bg-boldGreen hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default AddItem;