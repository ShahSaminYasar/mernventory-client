import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth/UseAuth';

const Login = () => {

    const navigate = useNavigate()
    const { signInWithEmail, signInWithGoogle } = UseAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const data = {
            email,
            password
        }
        console.log(data);

        try {
            await signInWithEmail(email, password);
            // Sign in was successful
            navigate('/');
        } catch (error) {
            console.error('Sign-in error:', error);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | LogIn</title>
            </Helmet>

            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>LogIn</h1>
                    </div>
                    <form onSubmit={handleSubmit} className='space-y-6 '>
                        <div className='space-y-4'>

                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    autoComplete='new-password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='bg-rose-500 w-full rounded-md py-3 text-white'
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Signup with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <button
                        onClick={signInWithGoogle}
                        className="border-white-500 group m-auto mb-4 mt-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none hover:text-white"
                    >
                        <span>
                            <img className="h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="" />
                        </span>
                        <span className=" text-black ">
                            Sign in with Google
                        </span>
                    </button>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account?{' '}
                        <Link
                            to='/Register'
                            className='hover:underline hover:text-rose-500 text-gray-600'
                        >
                            Register
                        </Link>
                        .
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;