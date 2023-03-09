import React, { useState } from 'react'
import Header from '../components/Header';
import axios from 'axios';

const PostJobs = () => {

    const handleSubmit = async (e) => {

    };

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');


    function submitData() {
        const data = {
            title : title,
            location : location,
            salary : salary,
            description : description,
            company : company,
        }

        axios.post("http://localhost:3000/api/postJob",data).then(response=>{
            console.log(response)
        }).then(()=>{
            
        })

        
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center w-screen h-screen">
                <form class="w-full max-w-sm">
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Title
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input onChange={(e)=>{setTitle(e.target.value)}} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='full stack' />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Company
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input onChange={(e)=>{setCompany(e.target.value)}} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="" />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Location
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input onChange={(e)=>{setLocation(e.target.value)}} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="" />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Salary
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input onChange={(e)=>{setSalary(e.target.value)}} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="number" placeholder="" />
                        </div>
                    </div>
                    {/* descriptioin */}
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Description
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea onChange={(e)=>{setDescription(e.target.value)}} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button onClick={submitData} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Create Job
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostJobs
