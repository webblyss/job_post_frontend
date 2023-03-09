import React from 'react'
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
const Jobs = () => {

    const list = [1,2,3,4,4,5,5,4,3]

    return (
        <div className='w-screen flex flex-col'>
            {list.map((item,index)=>{
                return <div className="mt-6 md:w-[40%] w-[80%] h-[300px] mx-auto border rounded flex flex-col p-3">
                <h4 className='hover:underline cursor-pointer font-bold'>Jr Python Developer</h4>
                <div className="flex flex-col">
                    <span>Inc company limited</span>
                    <span>Remote</span>
                </div>
                <div className="flex">
                    <div className="flex mx-1 rounded px-2 items-center bg-orange-300">
                        <FaMoneyBillAlt />
                        <span className='mx-1'>From $45 an hour</span>
                    </div>

                    <div className="flex rounded px-2 items-center bg-green-300">
                        <FaBriefcase />
                        <span className='mx-1'>Full-Time</span>
                    </div>

                </div>

                <div className="mt-5">
                    <ul>
                        <li>3+ years of experience</li>
                        <li>3+ using react.js,</li>
                        <li>3+ using docker containers</li>
                        <li>Be passionate about solving problems</li>
                    </ul>
                </div>

                <div className="flex mt-3 w-full">
                <button className="bg-blue-600 p-2 rounded text-white">Apply for this Job</button>
                </div>
            </div>
            })}


        </div>
    )
}

export default Jobs
