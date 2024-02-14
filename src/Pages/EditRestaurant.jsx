import React, { Fragment } from 'react';
import Wrapper from '../Components/Wrapper';
import Head from '../Components/Head';
import profile1 from '../assets/images/profile1.png'
import { RxCross2 } from "react-icons/rx";
import { MdOutlineDone } from "react-icons/md";



const EditRestaurant = () => {
    return (
        <>
            <Wrapper>
                <Head heading={"Registered Restaurants"} para={"Centralizing Control of Restaurant Management"} />
                <div>
                    <div className='flex align-center justify-center pt-10'>
                        <div className='bg-white px-5 md:px-10 rounded-xl md:flex' >
                            <div>
                                <div className='flex justify-center pt-10'>
                                    <img className='object-contain w-48' src={profile1} />
                                </div>
                            </div>
                            <div>
                                <div className='md:pl-10 pt-10'>
                                    <div className='flex flex-col pb-5 '>
                                        <span className='text-yellow-500 pb-1'>User ID</span>
                                        <div className='border py-1'>
                                            <span className='text-gray-800 pl-2'>#34347</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col pb-5'>
                                        <span className='text-yellow-500 pb-1'>Registration Date: </span>
                                        <div className='border py-1'>
                                            <span className='text-gray-800 pl-2'>02/09/2024 15:45 </span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col pb-5'>
                                        <span className='text-yellow-500 pb-1'>Location:</span>
                                        <div className='border py-1'>
                                            <span className='text-gray-800 pl-2 pr-10'>3M6J+WWP, Sargodha, Punjab, Pakistan</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-evenly pt-5 pb-10 '>
                                        <div className='flex bg-red-500 px-8 py-1 rounded-lg shadow-2xl cursor-pointer'>
                                            <span className='px-2 pt-1 text-white'><RxCross2 /></span><button className='text-white'>Cancel</button>
                                        </div>
                                        <div className='flex bg-[#83AF6F]  px-8 py-1 rounded-lg shadow-2xl cursor-pointer'>
                                            <span className='px-2 pt-1 text-white'><MdOutlineDone /></span><button className='text-white'>Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}

export default EditRestaurant;
