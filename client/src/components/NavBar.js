// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import "../input.css"

// const NavBar = () => {


// return (
//     <>
//         <div className="sm:flex h-full">
//         <div className="sm:block hidden bg-white relative w-72 h-full z-20 p-4" style={{ border: "none", position: "fixed" }}>
//                 <div className="w-64 h-relative position-fixed">
//                     <div className="p-6 cursor-pointer">
//                         <svg width={189} height={34} viewBox="0 0 189 34" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M61.8409 17.2727C61.8409 11.75 58.6023 8.30682 54.1364 8.30682C49.6705 8.30682 46.4318 11.75 46.4318 17.2727C46.4318 22.7955 49.6705 26.2386 54.1364 26.2386C58.6023 26.2386 61.8409 22.7955 61.8409 17.2727ZM59.7955 17.2727C59.7955 21.8068 57.3068 24.2614 54.1364 24.2614C50.9659 24.2614 48.4773 21.8068 48.4773 17.2727C48.4773 12.7386 50.9659 10.2841 54.1364 10.2841C57.3068 10.2841 59.7955 12.7386 59.7955 17.2727ZM75.8267 12.9091H73.6449L70.0312 23.3409H69.8949L66.2812 12.9091H64.0994L68.9403 26H70.9858L75.8267 12.9091ZM83.331 26.2727C86.8764 26.2727 89.2628 23.5795 89.2628 19.5227C89.2628 15.4318 86.8764 12.7386 83.331 12.7386C79.7855 12.7386 77.3991 15.4318 77.3991 19.5227C77.3991 23.5795 79.7855 26.2727 83.331 26.2727ZM83.331 24.4659C80.6378 24.4659 79.4105 22.1477 79.4105 19.5227C79.4105 16.8977 80.6378 14.5455 83.331 14.5455C86.0241 14.5455 87.2514 16.8977 87.2514 19.5227C87.2514 22.1477 86.0241 24.4659 83.331 24.4659ZM94.3445 18.125C94.3445 15.8409 95.7592 14.5455 97.6854 14.5455C99.5518 14.5455 100.685 15.7642 100.685 17.8182V26H102.697V17.6818C102.697 14.3409 100.915 12.7386 98.2649 12.7386C96.2876 12.7386 95.0604 13.625 94.4467 14.9545H94.2763V12.9091H92.3331V26H94.3445V18.125ZM106.645 26H108.759V19.1818H112.577C112.73 19.1818 112.875 19.1818 113.02 19.1733L116.702 26H119.156L115.21 18.7898C117.435 18.0312 118.474 16.2159 118.474 13.8977C118.474 10.8125 116.634 8.54545 112.543 8.54545H106.645V26ZM108.759 17.2727V10.4205H112.474C115.304 10.4205 116.395 11.8011 116.395 13.8977C116.395 15.9943 115.304 17.2727 112.509 17.2727H108.759ZM129.974 20.6477C129.974 23.1023 128.099 24.2273 126.599 24.2273C124.928 24.2273 123.735 23 123.735 21.0909V12.9091H121.724V21.2273C121.724 24.5682 123.496 26.1705 125.951 26.1705C127.928 26.1705 129.224 25.1136 129.837 23.7841H129.974V26H131.985V12.9091H129.974V20.6477ZM141.158 26.2727C143.817 26.2727 145.76 24.9432 146.374 22.9659L144.43 22.4205C143.919 23.7841 142.734 24.4659 141.158 24.4659C138.797 24.4659 137.169 22.9403 137.075 20.1364H146.578V19.2841C146.578 14.4091 143.68 12.7386 140.953 12.7386C137.408 12.7386 135.055 15.5341 135.055 19.5568C135.055 23.5795 137.374 26.2727 141.158 26.2727ZM137.075 18.3977C137.212 16.3608 138.652 14.5455 140.953 14.5455C143.135 14.5455 144.533 16.1818 144.533 18.3977H137.075ZM154.581 26.2727C157.104 26.2727 157.956 24.7045 158.399 23.9886H158.638V26H160.581V8.54545H158.57V14.9886H158.399C157.956 14.3068 157.172 12.7386 154.615 12.7386C151.308 12.7386 149.024 15.3636 149.024 19.4886C149.024 23.6477 151.308 26.2727 154.581 26.2727ZM154.854 24.4659C152.331 24.4659 151.036 22.25 151.036 19.4545C151.036 16.6932 152.297 14.5455 154.854 14.5455C157.308 14.5455 158.604 16.5227 158.604 19.4545C158.604 22.4205 157.274 24.4659 154.854 24.4659ZM170.033 26.2727C172.692 26.2727 174.635 24.9432 175.249 22.9659L173.305 22.4205C172.794 23.7841 171.609 24.4659 170.033 24.4659C167.672 24.4659 166.044 22.9403 165.95 20.1364H175.453V19.2841C175.453 14.4091 172.555 12.7386 169.828 12.7386C166.283 12.7386 163.93 15.5341 163.93 19.5568C163.93 23.5795 166.249 26.2727 170.033 26.2727ZM165.95 18.3977C166.087 16.3608 167.527 14.5455 169.828 14.5455C172.01 14.5455 173.408 16.1818 173.408 18.3977H165.95ZM180.524 18.125C180.524 15.8409 181.939 14.5455 183.865 14.5455C185.732 14.5455 186.865 15.7642 186.865 17.8182V26H188.876V17.6818C188.876 14.3409 187.095 12.7386 184.445 12.7386C182.467 12.7386 181.24 13.625 180.626 14.9545H180.456V12.9091H178.513V26H180.524V18.125Z"
//                                 fill="#1F2937"
//                             />
                            
//                             <path
//                                 d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
//                                 fill="#1F2937"
//                             />
//                         </svg>
                        
//                     </div>
//                     <div className="mt-8 w-64">
//                         <div>
                            
//                             <div className="border-l-4 border-indigo-700 py-2 cursor-pointer bg-gradient-to-r from-indigo-100 to-white flex items-center">
//                                 <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
//                                     <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M19.5 8.19094V2.25H15.75V4.98984L12 1.5L0 12.75H3V22.5H9.75V15H14.25V22.5H21V12.75H24L19.5 8.19094Z" fill="#4338CA" />
//                                     </svg>
//                                 </div>
//                                 <NavLink to="/home" className="text-sm leading-none group-hover:text-indigo-700 text-indigo-700">Home</NavLink>
//                             </div>
//                         </div>
//                         <div className="mt-4">
//                             <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
//                                 <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
//                                 </svg>
//                                 </div>
//                                 <NavLink to="/calendar" className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">Calendar</NavLink>                            </div>
//                         </div>
//                         <div className="mt-4">
//                             <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
//                                 <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
//                                 </svg>

//                                 </div>
//                                 <NavLink to="/profile" className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">Profile</NavLink>                            </div>
//                         </div>
//                         <div className="mt-4">
//                             <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
//                                 <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
//                                 </svg>
//                                 </div>
//                                 <NavLink to="/login" className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">Logout</NavLink>

//                             </div>
//                         </div>
                      
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
// );
// }

// export default NavBar



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