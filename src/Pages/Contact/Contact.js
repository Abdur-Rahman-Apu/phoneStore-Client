import React from 'react';
import Lottie from "lottie-react";
import ContactAnimation from '../../assets/contact.json';

const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center text-[#353b48] font-bold">Contact us</h1>
                    <div className='h-[500px] w-[800px]'>
                        <Lottie className='h-full' animationData={ContactAnimation} loop={true} />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-black">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-black">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-black">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject of message" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-black">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <input className='btn border-0 bg-boldGreen hover:bg-green-700 ' type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;