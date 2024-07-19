
import React from 'react'
import Link from 'next/link';

const Projects = () => {

  return (
    <div>

      <div className="flex flex-col items-center text-center p-4">
        <h2 className="text-4xl font-bold text-black mb-4">My Projects</h2>
        <p className="text-lg text-black">
          Visit my <Link href="https://github.com/Taylor-99" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 visited:text-purple-600">GitHub</Link>
        </p>
      </div>

      <br></br>

      <div className="bg-white bg-opacity-40 rounded-lg shadow-md p-4" >

        <h1 className="text-2xl text-center text-black">Pirate Adventure Trivia Game</h1>

          <br></br>

        <Link href="https://pirate-adventure-trivia-game.vercel.app">
          <img src='https://imgur.com/cGs17gy.png' className="block align-middle w-auto"/>
        </Link>

          <br></br>

        <div className="flex justify-center">
          <Link href="https://github.com/Taylor-99/Project-1-Trivia-Game"
            className="bg-pink-400 text-2xl text-white px-8 py-4 hover:bg-pink-500 rounded-md">
              Github
          </Link>
        </div>

      </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

      <div className="bg-white bg-opacity-40 rounded-lg shadow-md p-4" >

        <h1 className="text-2xl text-center text-black">Reader's Jounal</h1>

          <br></br>

        <Link href="https://readersjournal-27f55d6eb9b9.herokuapp.com/library">
          <img src='https://imgur.com/nCeGYzj.png' className="block align-middle w-auto"/>
        </Link>

          <br></br>

        <div className="flex justify-center">
          <Link href="https://github.com/Taylor-99/Readers-Journal"
            className="bg-pink-400 text-2xl text-white px-8 py-4 hover:bg-pink-500 rounded-md">
              Github
          </Link>
        </div>

      </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

      <div className="bg-white bg-opacity-40 rounded-lg shadow-md p-4" >

        <h1 className="text-2xl text-center text-black">Sound Scope</h1>

          <br></br>

        <Link href="https://soundscope.netlify.app/">
          <img src='https://imgur.com/wloR6Gr.png' className="block align-middle w-auto"/>
        </Link>

          <br></br>

        <div className="flex justify-center">
          <Link href="https://github.com/GrabberKaibutsu/SoundScope"
            className="bg-pink-400 text-2xl text-white px-8 py-4 hover:bg-pink-500 rounded-md">
              Github
          </Link>
        </div>

      </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

      <div className="bg-white bg-opacity-40 rounded-lg shadow-md p-4" >

        <h1 className="text-2xl text-center text-black">Garden Health</h1>

          <br></br>

        <Link href="https://garden-health-frontend-ok73.vercel.app/auth">
          <img src='https://imgur.com/5DC6Wdb.png' className="block align-middle w-auto"/>
        </Link>

          <br></br>

        <div className="flex justify-center">
          <Link href="https://github.com/Taylor-99/Garden-Health-Frontend"
            className="bg-pink-400 text-2xl text-white px-8 py-4 hover:bg-pink-500 rounded-md">
              Github
          </Link>
        </div>

      </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </div>
  )
}

export default Projects