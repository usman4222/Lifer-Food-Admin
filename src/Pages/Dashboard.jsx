import React from "react";
import Wrapper from "../Components/Wrapper";
import Head from "../Components/Head";
import { LuUsers2 } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";


const Dashboard = () => {


    return (
        <>
            <Wrapper>
                <Head heading={"Dashboard"} para={"Registration Updates!"} />
                <div className=" lg:ml-5 lg:grid lg:grid-cols-12 mr-6 mt-5 gap-x-2 lg:px-0 gap-y-5 lg:pr-10">
                    <div className="bg-white col-span-12 md:col-span-6 lg:col-span-4 mt-6 lg:mt-6 shadow-lg  flex flex-row justify-center items-center rounded-xl py-10 gap-x-6 ml-6 md:ml-6 lg:ml-0">
                        <div>
                            <div className="bg-[#FFF4D9] p-4 rounded-full	">
                                <div className="flex justify-center items-center">
                                    <LuUsers2 className="text-[#FFB100]" size={42} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div>
                                <h3 className="text-center font-extrabold text-3xl text-[#464255]">20k</h3>
                                <span className="text-[#464255] text-sm">Registered Accounts</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white col-span-12 md:col-span-6 lg:col-span-4 mt-6 lg:mt-6 shadow-lg  flex flex-row justify-center items-center rounded-xl py-10 gap-x-6 ml-6 md:ml-6 lg:ml-0">
                        <div>
                            <div className="bg-[#FFF4D9] p-4 rounded-full	">
                                <div className="flex justify-center items-center">
                                    <LuUsers2 className="text-[#FFB100]" size={42} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div>
                                <h3 className="text-center font-extrabold text-3xl text-[#464255]">42</h3>
                                <span className="text-[#464255] text-sm">Pending Accounts</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white mt-6 col-span-12 md:col-span-6 lg:col-span-4 shadow-lg  rounded-xl gap-x-6 ml-6 md:ml-6 lg:ml-0">
                        <div>
                            <h6 className="text-center pt-5 font-bold text-[#464255]">Open Tickets</h6>
                        </div>
                        <div className="flex flex-row justify-center items-center pt-4 gap-x-12">
                            <div>
                                <div>
                                    <span className="text-[#FFB100] text-sm font-bold">New Tickets</span>
                                    <h3 className="text-center font-bold text-2xl pt-3 text-[#464255] pb-5 md:pb-0">21</h3>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div>
                                    <span className="text-[#EA985B] text-sm font-bold">Pending Tickets</span>
                                    <h3 className="text-center font-bold text-2xl pt-3 text-[#464255] pb-5 md:pb-0">29</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-5 lg:mr-10 md:ml-2 lg:grid lg:grid-cols-12 pt-5">
                    <div className="pt-10 lg:col-span-9">
                        <div className="overflow-x-auto bg-white rounded-md mx-5 lg:grid lg:col-row-2 lg:mx-0">
                            <div className="w-full py-3 pl-4 border-b ">
                                <div className="text-left text-[#1E1E1E] font-bold md:text-xl">Graph</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5  md:flex md:justify-center lg:block lg:col-span-3 lg:flex-col lg:pt-10">
                        <div className="bg-white p-5 md:px-14 lg:px-0 rounded-lg shadow-lg">
                            <div>
                                <h5 className="font-extrabold	text-[#464255] text-lg pb-2 text-center md:pt-5 lg:pt-0">Sales Today</h5>
                                <h6 className="text-[#FFB100] font-bold text-lg text-center pb-2">Premium</h6>
                                <div className="pt-2">
                                    <div>
                                        <h3 className="text-[#464255] text-3xl text-center font-extrabold pb-5">29</h3>
                                    </div>
                                    <div className="flex justify-center items-center pb-5">
                                        <div className="text-green-500 p-2 bg-green-100 rounded-full">
                                            <FaArrowUp size={12} />
                                        </div>
                                        <span className="text-xs text-[#A3A3A3] pl-1">4% Yesterday</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-1 border-t border-[#FFF4D9]" />
                            <div className="pt-5">
                                <h6 className="text-[#A3BB98] font-bold text-lg text-center pb-2">Manual</h6>
                                <div className="pt-2">
                                    <div>
                                        <h3 className="text-[#464255] text-3xl text-center font-extrabold pb-5">29</h3>
                                    </div>
                                    <div className="flex justify-center items-center pb-5">
                                        <div className="text-[#FF5B5B] p-2 bg-red-100 rounded-full">
                                            <FaArrowUp size={12} />
                                        </div>
                                        <span className="text-xs text-[#A3A3A3] pl-1">4% Yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Dashboard;