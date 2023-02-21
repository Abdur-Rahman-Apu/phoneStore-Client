import React, { useRef } from 'react';
import Lottie from "lottie-react";
import ContactAnimation from '../../assets/contact.json';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const handleContact = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vj9xcfu', 'template_rk1igog', form.current, 'huB7HdbtLQHtlBqmr')
            .then((result) => {
                toast.success(result.text, {
                    duration: 4000,
                    position: 'top-center'
                });
            }, (error) => {
                toast.error(error.text, {
                    duration: 4000,
                    position: 'top-center'
                })
            });
        e.target.reset()
    }

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
                    <form ref={form} onSubmit={handleContact} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-black">Name</span>
                            </label>
                            <input type="text" name="user_name" placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-black">Email</span>
                            </label>
                            <input type="text" name="user_email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-black">Subject</span>
                            </label>
                            <input type="text" name="subject" placeholder="Subject of message" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-black">Message</span>
                            </label>
                            <textarea name="message" className="textarea textarea-bordered" placeholder="Your message"></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <input className='btn border-0 bg-boldGreen hover:bg-green-700 ' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;