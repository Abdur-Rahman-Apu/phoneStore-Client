import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Google from '../../assets/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'

const LogIn = () => {
    const [protect, setProtect] = useState(null)





    const handleDisplay = (event) => {
        const input = event.target.parentElement.parentElement.parentElement.childNodes[1];

        setProtect(input.attributes.type.value)


        if (protect === 'password') {
            setProtect('text')
        } else {
            setProtect('password')
        }

        input.setAttribute("type", `${protect}`)



        console.log(input.attributes.type);

    }

    return (
        <div className="hero min-h-screen bg-base-200 dark:bg-black">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-boldGreen font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-gray-800 dark:border-gray-700">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            {
                                (protect === 'password') && <button onClick={handleDisplay}><FontAwesomeIcon className='absolute bottom-[50px] right-[10px]' icon={faLock} /></button>
                            }
                            {
                                (protect === 'text' || protect === null) && <button onClick={handleDisplay}><FontAwesomeIcon className='absolute bottom-[50px] right-[10px]' icon={faUnlock} /></button>
                            }

                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-boldGreen border-0">Login</button>
                        </div>
                        <div className="divider dark:text-white">OR</div>
                        <div className="form-control">
                            <button className="btn bg-white shadow-md text-black border-0 hover:text-white">
                                <img className='img-fluid h-8' src={Google} alt="google logo" />
                                Google
                            </button>
                        </div>

                        <p className='text-center dark:text-white'>Are you a new user? <Link to="/register" className='text-boldGreen font-bold'>Register</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogIn;