import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PasswordReset = () => {

    const { updatePassword } = useContext(AuthContext)

    const navigate = useNavigate()

    const handlePassword = (event) => {
        event.preventDefault()
        const email = document.getElementById('email').value;

        updatePassword(email)
            .then(() => {
                toast.success("Please check your mail to update password", {
                    duration: 4000,
                    position: 'top-center'
                })
                navigate('/login')
            })
            .catch(error => {
                toast.error("Error happened on password reset")
            })


    }

    return (
        <div className='min-h-screen w-1/2 mx-auto flex justify-center items-center'>

            <div className="w-full max-w-sm p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handlePassword} className="space-y-6" action="#">
                    <h5 className="text-xl text-center font-medium text-boldGreen dark:text-white">Reset Your Password</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-boldGreen text-sm font-bold dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>


                    <button type="submit" className="w-full text-white bg-boldGreen hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Password</button>

                </form>
            </div>

        </div>
    );
};

export default PasswordReset;