import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import Lottie from "lottie-react"
import animation from "../../assets/registration.json"
import Load from "../../assets/load.json"

const Register = () => {

    // password hide & show code 

    const [protect, setProtect] = useState(null)

    const handleDisplay = (event) => {
        const input = event.target.parentElement.parentElement.parentElement.childNodes[1];

        setProtect(input?.attributes?.type?.value)

        if (protect === 'password') {
            setProtect('text')
        } else {
            setProtect('password')
        }

        input.setAttribute("type", `${protect}`)

    }


    // form validation and store into database 

    const { signUp, updateUserProfile, loading, setLoading, logOut } = useContext(AuthContext)

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegister = (data) => {
        const { name, email, password, role } = data
        const img = data.image[0]

        const formData = new FormData()
        formData.append('image', img)
        const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgBBkey}`

        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    signUp(email, password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            const profileInfo = {
                                displayName: name,
                                photoURL: imgData.data.url
                            }

                            updateUserProfile(profileInfo)
                                .then(() => {

                                    const userInfo = {
                                        name,
                                        email,
                                        password,
                                        image: imgData.data.url,
                                        role
                                    }
                                    fetch(`http://localhost:5000/users`, {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json',
                                        },
                                        body: JSON.stringify(userInfo)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            console.log(data);
                                            if (data.acknowledged) {

                                                navigate('/login')
                                                console.log("Asci");

                                                logOut()
                                                    .then(() => {
                                                        console.log("Logged out");
                                                    })

                                                toast.success("User registered successfully. Please log in", {
                                                    duration: 4000,
                                                    position: 'top-center'
                                                })

                                            }

                                        })
                                        .catch(error => {
                                            toast.error("Errors happened during stored data in the database", {
                                                duration: 4000,
                                                position: 'top-center'
                                            })
                                        })
                                })
                                .catch(error => {
                                    toast.error("Errors happened during update the profile", {
                                        duration: 4000,
                                        position: 'top-center'
                                    })
                                })

                        })
                }
            }).catch(error => {
                toast.error("Errors achieved to upload the picture", {
                    duration: 4000,
                    position: 'top-center'
                })
            })
        setLoading(false)

    }

    if (loading) {
        return <>
            <Lottie animationData={Load} loop={true} className="h-[600px]" />
        </>
    }
    return (
        <div className="hero min-h-screen bg-base-200 dark:bg-black">
            <div className="hero-content flex-col lg:flex-row justify-around">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center text-boldGreen font-bold">Register now!</h1>
                    <Lottie animationData={animation} loop={true} className="h-[500px] w-[500px]" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: "Name is required" })} />
                            {errors.name?.type === 'required' && <p className='text-red-500 mt-3' role="alert">{errors.name.message}</p>}

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs"  {...register("image", { required: "Image is required" })} />

                            {errors.image?.type === 'required' && <p className='text-red-500 mt-3' role="alert">{errors.image.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Role</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs" {...register("role", { required: "Role is required" })}>
                                <option>Customer</option>
                                <option>Seller</option>
                            </select>

                            {errors.role?.type === 'required' && <p className='text-red-500 mt-3' role="alert">{errors.role.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: "Email is required" })} />
                            {errors.email?.type === 'required' && <p className='text-red-500 mt-3' role="alert">{errors.email.message}</p>}
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: "Password is required" })} />

                            {errors.password?.type === 'required' && <p className='text-red-500 mt-3' role="alert">{errors.password.message}</p>}

                            {
                                (protect === 'password') && <button onClick={handleDisplay}><FontAwesomeIcon className='absolute bottom-[20px] right-[10px]' icon={faLock} /></button>
                            }
                            {
                                (protect === 'text' || protect === null) && <button onClick={handleDisplay}><FontAwesomeIcon className='absolute bottom-[20px] right-[10px]' icon={faUnlock} /></button>
                            }


                        </div>
                        <div className="form-control mt-6 relative">
                            <input type="submit" className="btn bg-boldGreen border-0" value="Register" disabled={loading} />
                            {
                                loading && <div role="status" className='absolute top-1/2 right-1/2 
                                -translate-x-[-60%] -translate-y-[50%]'>
                                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>

                                </div>
                            }

                        </div>

                        <p className='text-center mt-5 dark:text-white'>Are you a registered user? <Link to="/login" className='text-boldGreen font-bold'>Log in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;