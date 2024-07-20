
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Home = () => {
  return (
    <div>

      <div className="flex flex-col items-center justify-center text-center bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
        <h1 className="text-5xl text-black">
          Welcome, I&apos;m Taylor
        </h1>
        <p className="mt-2 text-black">
          A Curious and Diligent Full-Stack Software Engineer based in Florida
        </p>

      </div>

      <br></br>

      <div className="flex justify-center items-center space-x-4 p-2 rounded-md">

      <Link href="https://www.linkedin.com/in/taylor-e-young/" target="_blank" rel="noopener noreferrer" className="">
        <Image
          src="/linkedin.png"
          width={25}
          height={25}
          alt="Visit my LinkedIn"
          className="hover:opacity-80" 
        />
      </Link>

      <Link href="https://github.com/Taylor-99" target="_blank" rel="noopener noreferrer" className="">
        <Image
          src="/github.png"
          width={25}
          height={25}
          alt="Visit my GitHub"
          className="hover:opacity-80" 
        />
      </Link>

      <Link href="https://docs.google.com/document/d/1g5_BKtvFA9-W8fqRc-bN_TDMcSIW8it9tDyRIM35-34/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="">
        <Image
          src="/document.png"
          width={25}
          height={25}
          alt="View my Resume"
          className="hover:opacity-80" 
        />
      </Link>

      <Link href="mailto:Taylor.e.young99@gmail.com" target="_blank" rel="noopener noreferrer" className="">
        <Image
          src="/envelope.png"
          width={25}
          height={25}
          alt="Send me an Email"
          className="hover:opacity-80" 
        />
      </Link>
        
      </div>

    </div>
  )
}

export default Home