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
    console.log(from);

    const handleLogIn = (event) => {

        setLoading(true)

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

        setLoading(false)
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
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-boldGreen font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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
                            <input type="submit" value="Login" className="btn bg-boldGreen border-0" disabled={loading} />
                            {
                                loading && <div role="status" className='absolute top-1/2 right-1/2 
                                -translate-x-[-60%] -translate-y-[50%]'>
                                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            }
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