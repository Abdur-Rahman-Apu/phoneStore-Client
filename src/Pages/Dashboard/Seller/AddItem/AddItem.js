import React from 'react';

const AddItem = () => {
    return (
        <div>
            <h1 className='text-xl font-bold text-boldGreen text-center'>Add item</h1>
            <div>

                <form>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-boldGreen dark:text-white">Name</label>
                        <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" required />
                    </div>
                    <div class="mb-6">
                        <label className="label">
                            <span className="label-text text-boldGreen font-bold dark:text-white">Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" required />
                    </div>
                    <div class="mb-6">
                        <label for="price" class="block mb-2 text-sm font-medium text-boldGreen dark:text-white">Price</label>
                        <input type="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='10' required />
                    </div>
                    <div class="mb-6">

                        <label for="message" class="block mb-2 text-sm font-bold text-boldGreen  dark:text-white">Description</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product description"></textarea>

                    </div>

                    <button type="submit" class="text-white bg-boldGreen hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default AddItem;