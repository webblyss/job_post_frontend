import React from 'react'

const Header = () => {
  return (
    <div className='w-screen h-[50px] shadow'>
        <nav className='w-[80%] h-full mx-auto flex justify-between items-center'>
            <h4 className="font-bold">JobSearch</h4>
            <div className="postJob">
                <button className="bg-teal-600 p-1 rounded text-white">post job</button>
            </div>
        </nav>
    </div>
  )
}

export default Header
