import React from 'react'
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description: "Align on goals, constraints, and success metrics.",
    icon: <Lightbulb className="w-6 h-6 text-black" />,
  },
  {
    title: "Design",
    description: "Prototype experiences, validate flows, de-risk.",
    icon: <PenTool className="w-6 h-6 text-black" />,
  },
  {
    title: "Build",
    description: "Ship in sprints with CI/CD and quality gates.",
    icon: <Code2 className="w-6 h-6 text-black" />,
  },
  {
    title: "Scale",
    description: "Operate, observe, and iterate for growth.",
    icon: <Rocket className="w-6 h-6 text-black" />,
  },
];


const Ourprocess = () => {
  return (
   <section className='px-8 md:px-20 py-16  bg-gray-100'>
    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Our Process</h2>
     <p className='text-gray-500 text-lg mb-10'>Transparent, outcome‑driven collaboration.</p>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          steps.map((step,index)=>(
            <div  key={index} className='border-none rounded-lg p-6  shadow-sm hover:shadow-md transition'>
                 <div className='flex items-startspace-x-3 mb-4'>{step.icon}
                    </div>
                        <h3 className='text-lg font-semibold text-gray-900'>{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
            </div>
          ))
        }
     </div>
    </section>
  )
}

export default Ourprocess
