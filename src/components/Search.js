import React from 'react'

const Search = () => {
  return (
    <div className="flex flex-col">
        <div className='mt-6 w-[80%] flex flex-col justify-center mx-auto'>
        <input type="text" placeholder='search job' id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <button type="button" class=" mt-6 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 ">Find job</button>
        </div>
    </div>
  )
}

export default Search
