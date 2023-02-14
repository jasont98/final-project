import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import "../input.css"


const NavBar = () => {
    const [show, setShow] = useState(null);

    return (
        <>
            <div className={show ? "lg:w-96 w-64 absolute z-40 top-0 bg-gray-800 shadow text-center flex-col justify-between pb-12 transition duration-150 h-full ease-in-out transform  translate-x-0" : "lg:w-96 w-64 z-40 fixed z-40 top-0 bg-gray-800 shadow  flex-col justify-between pb-12 transition duration-150 ease-in-out transform  -translate-x-full"}>
                {" "}
                <div className="lg:px-6 px-4 flex justify-center items-center pt-16">
                    <a className="cursor-pointer">
                        <img src="https://i.ibb.co/60vgxq2/GITIT.png" alt="GITIT" className="lg:w-52 w-32 mr-3 ml-8" />
                    </a>
                    <div className="cursor-pointer lg:block hidden" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div>
                    {/* <div className="cursor-pointer lg:hidden block" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div> */}
                </div>
                <div className="flex justify-center">
                    <ul className="mt-36">
                        <li className="text-base font-bold  hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <NavLink to="/home" className="text-base font-bold  hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">Home</NavLink>
                        </a>
                        </li>
                        <li className="text-base font-bold hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <NavLink to="/calendar" className="text-base font-bold  hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">Calendar</NavLink>
                        </a>
                        </li>
                        <li className="text-base font-bold  hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <NavLink to="/profile" className="text-base font-bold  hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">Profile</NavLink>
                        </a>
                        </li>
                        <li className="text-base font-bold  hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <NavLink to="/login" className="text-base font-bold  hover:bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 text-white rounded-full">Logout</NavLink>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto ml-0 mr-0 container lg:px-0 px-4 h-full relative">
            <div className="mx-auto flex pt-8 items-center px-4 lg:justify-between lg:align-start lg:flex-row mr-auto ml-0" style={{ width: "2450px" }}>
            <div className="cursor-pointer pr-6" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={31} viewBox="0 0 50 31" fill="none">
                            <rect x={50} y={31} width={50} height={5} rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                            <rect x={50} y={5} width={50} height={5} rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                            <rect x={35} y={18} width={35} height={5} rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                        </svg>
                    </div>
                    <a href="javascript:void(0)" className="cursor-pointer">
                        <img src="https://i.ibb.co/60vgxq2/GITIT.png" class="lg:w-56 w-32" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default NavBar