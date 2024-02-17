import React, { Fragment } from 'react'
import Wrapper from '../Components/Wrapper'
import { IoPrintOutline } from "react-icons/io5";

const Transaction = () => {
    return (
        <Fragment>
            <Wrapper>
                <div className='flex justify-center'>
                    <div className='bg-white w-[400px]'>
                        <div className='bg-[#FFF4D9] py-4'>
                            <h6 className='text-center text-[#FFB409] font-bold text-xl'>Transaction Invoice</h6>
                        </div>
                        <div className='pt-7 px-10'>
                            <div className='pb-5'>
                                <h6 className='text-[#FFB100]'>Restaurant Name: </h6>
                                <span className='text-[#464255]'>Mcdonald’s </span>
                            </div>
                            <div className='pb-5'>
                                <h6 className='text-[#FFB100]'>User ID: </h6>
                                <span className='text-[#464255]'>#5045 </span>
                            </div>
                            <div className='pb-5'>
                                <h6 className='text-[#FFB100]'>Package </h6>
                                <span className='text-[#464255]'>Premium </span>
                            </div>
                            <div className='pb-5'>
                                <h6 className='text-[#FFB100]'>Registration Date: </h6>
                                <span className='text-[#464255]'>02/09/2024 15:45  </span>
                            </div>
                            <div className='pb-5'>
                                <h6 className='text-[#FFB100]'>Total Amount: </h6>
                                <span className='text-[#464255]'>$450  </span>
                            </div>
                            <div className='pb-5'>
                                <h6 className='text-[#FFB100]'>Payment Status: </h6>
                                <span className='text-[#18B758]'>Successful </span>
                            </div>
                            <div className='pb-8'>
                                <h6 className='text-[#464255] pb-2'>Message</h6>
                                <p className='text-xs text-[#464255]'>This message is to let you know that the payment has been made</p>
                            </div>
                            <div className='flex justify-center mb-10 '>
                                <div className='flex justify-center rounded-md py-2 bg-[#FFB100] w-[100px] text-white shadow-lg'><IoPrintOutline className='mt-1 mr-1'/><button>Print</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Fragment>
    )
}

export default Transaction
