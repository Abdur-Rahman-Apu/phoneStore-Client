import React from 'react';
import { Link } from 'react-router-dom';
import Google from '../../assets/google.png'

const LogIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-boldGreen border-0">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <button className="btn bg-white shadow-md text-black border-0 hover:text-white">
                                <img className='img-fluid h-8' src={Google} alt="google logo" />
                                Google
                            </button>
                        </div>

                        <p className='text-center'>Are you a new user? <Link to="/register" className='text-boldGreen font-bold'>Register</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogIn;