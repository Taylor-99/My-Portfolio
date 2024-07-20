
// To inform next js, this is a client component 
"use client"; 

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Projects = () => {

  const [projects, setProjects] = useState([]);
  // const backend_endpoint = process.env.NEXT_PUBLIC_BACKEND_URL
  const backend_endpoint = "http://localhost:4000"

  useEffect(() => {
    const fetchProjects = async () => {
      try {

        const response = await fetch(`${backend_endpoint}/projects`, {
          credentials: 'include'
        });

        const data = await response.json()
        setProjects(data)

      } catch (error) {
        console.error('Error: ', error.message);
      }
    };

    fetchProjects()
  }, []);

  return(

    <div>

        <div className="flex flex-col items-center text-center p-4">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">My Projects</h2>
        </div>

      <br></br>

      <ul className="grid grid-rows sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          { projects && projects.map((project, idx) => {

            const loaded = () => {

              return(

                <li key={idx} className="bg-white bg-opacity-40 rounded-lg shadow-md p-4 w-45">
                  <h1 className="text-2xl text-center text-black overflow-hidden text-ellipsis whitespace-nowrap">{project.name}</h1>

                  <br></br>

                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} className="block align-middle w-auto" alt="Project Cover"/>
                  </Link>

                  <br></br>

                  <div className="flex justify-center">
                    <Link href={project.git} className="bg-pink-400 text-2xl text-white px-8 py-4 hover:bg-pink-500 rounded-md" target="_blank" rel="noopener noreferrer">
                        Github
                    </Link>
                  </div>

                </li>

              );
            }

              return projects ? loaded() : <h1>Loading...</h1>;

          })};

      </ul>
    </div>

    )
  }

export default Projects