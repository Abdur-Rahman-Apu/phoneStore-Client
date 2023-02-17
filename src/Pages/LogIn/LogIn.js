import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Google from '../../assets/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

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

    //handle Log in

    const { logIn, loading, setLoading } = useContext(AuthContext)


    const navigate = useNavigate()

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const handleLogIn = (event) => {
        event.preventDefault()
        const email = event.target.childNodes[0].querySelector('input').value
        const password = event.target.childNodes[1].querySelector('input').value

        fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    logIn(email, password)
                        .then(result => {
                            const user = result.user;
                            const email = user.email;
                            console.log(email);
                            const userInfo = {
                                email: email
                            }
                            fetch('http://localhost:5000/jwt', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(userInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.token) {
                                        localStorage.setItem('phone-token', data.token)
                                    }
                                    toast.success("Log in successfully")
                                    navigate(from, { replace: true })
                                })
                                .catch(error => toast.error("Problem obtained in authentication", {
                                    duration: 4000,
                                    position: 'top-center'
                                }))
                        })
                        .catch(error => {
                            toast.error("Log in failed", {
                                duration: 4000,
                                position: 'top-center'
                            })
                        })
                }
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 dark:bg-black">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-boldGreen font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
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
                            <input type="submit" value="Login" className="btn bg-boldGreen border-0" />
                        </div>
                        <div className="divider dark:text-white">OR</div>
                        <div className="form-control">
                            <button className="btn bg-white shadow-md text-black border-0 hover:text-white">
                                <img className='img-fluid h-8' src={Google} alt="google logo" />
                                Google
                            </button>
                        </div>

                        <p className='text-center dark:text-white'>Are you a new user? <Link to="/register" className='text-boldGreen font-bold'>Register</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;