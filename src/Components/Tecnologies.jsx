import React from 'react'

const technologies = [
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "Docker",
];


const Tecnologies = () => {
  return (
     <section className='px-8 md:px-20 py-16  bg-white'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Technologies</h2>
         <p className='text-gray-500 text-lg mb-10'>Best‑in‑class tools, chosen to fit your context.</p>
          <div className='flex flex-wrap gap-3'>
            {
              technologies.map((tech, index)=>(
                <div  className="inline-block px-4 py-2 rounded-full border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 transition">
                  {tech}
                </div>
              ))
            }
          </div>
     </section>

  )
}

export default Tecnologies
