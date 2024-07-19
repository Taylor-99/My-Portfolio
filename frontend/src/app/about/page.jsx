
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const About = () => {

  return (

    <div className="flex flex-col items-center p-5">

      <div className="flex flex-col items-center text-center p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">
          Get to Know Me
        </h2>

        <Image
          src="/headshot.jpeg"
          width={100}
          height={100}
          alt="Picture of Taylor"
          className="rounded-full" 
        />
      </div>

      <br />

      <p className="text-black text-lg p-6 bg-white bg-opacity-40 rounded-lg shadow-md">
        I’m Taylor, a recent graduate of General Assembly’s intensive Software Engineering Bootcamp. Originally from Crystal River, FL, I earned a Bachelor of Arts in Psychology with a secondary focus in Computer Science from New College of Florida in 2022. My academic journey reflects a deep curiosity about human behavior and a passion for leveraging technology to drive positive change.

        <br /><br />

        Beyond academia, I find solace in the realm of cinema, exploring diverse films that broaden my perspectives. I am also an avid reader, finding joy in books that expand my knowledge and imagination. Music is another integral part of my life, serving as both a source of inspiration and relaxation during my coding sessions. Amidst my studies and personal pursuits, I share a special bond with my canine companion, Prince, whose unwavering presence brings joy to my everyday life.

        <br /><br />

        Having honed my skills at General Assembly, I am now actively seeking job opportunities where I can blend my technical expertise with a human-centered approach, creating software solutions that enhance lives and empower individuals. I am driven by a desire to innovate and collaborate, making a positive impact on the world through technology.
      </p>

      <br></br>
      <br></br>

      <p className="text-black text-lg p-6"> What to learn more about me profesionally, Check out my <Link href="https://www.linkedin.com/in/taylor-e-young/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 visited:text-purple-600"> LinkedIn </Link> </p>

    </div>
  )
}

export default About