import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 dark:bg-black">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-boldGreen font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-gray-800 dark:border-gray-700">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Role</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option>Customer</option>
                                <option>Seller</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-boldGreen border-0">Register</button>
                        </div>

                        <p className='text-center mt-5 dark:text-white'>Are you a registered user? <Link to="/login" className='text-boldGreen font-bold'>Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;