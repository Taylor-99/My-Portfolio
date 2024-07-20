
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full">

      <div className="w-full border-t border-gray-800 my-4"></div>

      <div className="text-center">
        <p className="text-black">@2024 Taylor Young</p>
        <small className="text-black">Photo by mymind on Unsplash</small>
        <br></br>
        <small className="text-black">Uicons by <Link href="https://www.flaticon.com/uicons" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 visited:text-purple-600">Flaticon</Link></small>
      </div>
    </div>
  )
}

export default Footer