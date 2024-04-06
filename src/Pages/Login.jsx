import React, { Fragment } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Wrapper from '../Components/Wrapper';
import logo from '../assets/images/admin.png'

const Login = () => {
    return (
        <Fragment>
            <Wrapper>
                <div className='flex justify-center'>
                    <div className='bg-white w-fit px-10 rounded-xl'>
                        <div className='flex justify-center py-8'>
                            <img className='object-contain w-40' src={logo} />
                        </div>
                        <div>
                            <h3 className='text-[#464255] text-lg font-bold py-2'>Login</h3>
                            <p  className='text-[#464255] text-sm pb-8'>Please fill your information bellow</p>
                        </div>
                        <div>
                            <div>
                                <div className="relative">
                                    <input
                                        type='text'
                                        placeholder='E-mail'
                                        className="pl-10 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MdEmail className="text-gray-500" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 mb-8'>
                                <div className="relative">
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        className="pl-10 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <RiLockPasswordFill className="text-gray-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#F58201] flex justify-center py-2 mb-8 text-white rounded-md cursor-pointer'>
                            <button>Login</button>
                        </div>
                        <div className='mb-10'>
                            <h6 className='text-center text-sm text-[#464255] cursor-pointer'>Forgot Your Password?</h6>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Fragment>
    )
}

export default Login
