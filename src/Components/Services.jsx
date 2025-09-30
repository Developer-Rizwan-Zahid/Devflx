import React from 'react'
import {Code, Brush, Cloud, ShieldCheck, BrainCircuit, PenTool,} from 'lucide-react';

const services = [
  {
    title: 'Web & Mobile Development',
    description:
      'Modern React/Native apps, APIs, and platforms built for scale and speed.',
    icon: <Code className="w-6 h-6 text-gray-800" />,
  },
  {
    title: 'UI/UX',
    description:
      'Elegant interfaces with purposeful motion and accessible design systems.',
    icon: <Brush className="w-6 h-6 text-gray-800" />,
  },
  {
    title: 'DevOps & Cloud',
    description:
      'CI/CD, observability, and cloud infrastructure that’s resilient and cost-smart.',
    icon: <Cloud className="w-6 h-6 text-gray-800" />,
  },
  {
    title: 'Cybersecurity',
    description:
      'Security reviews, hardening, and governance baked into every build.',
    icon: <ShieldCheck className="w-6 h-6 text-gray-800" />,
  },
  {
    title: 'AI & Automation',
    description:
      'LLM integrations, agents, and workflow automation that deliver ROI.',
    icon: <BrainCircuit className="w-6 h-6 text-gray-800" />,
  },
  {
    title: 'Designing Services',
    description:
      'Brand, product, and marketing design that’s cohesive and on-message.',
    icon: <PenTool className="w-6 h-6 text-gray-800" />,
  },
];
function Services() {
  return (
   <section className='px-8 md:px-20 py-16  bg-white' id='services'>
    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Services</h2>
    <p className='text-gray-500 text-lg mb-10'>Full‑stack product teams that ship. Clean, secure, and scalable by default.</p>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            services.map((services, index)=>(
                <div key={index} className='border-none rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition'>
                    <div className='flex items-start space-x-3 mb-4'>{services.icon}
                        <h3 className='text-lg font-semibold text-gray-900'>{services.title}</h3>
                    </div>
                        <p className='text-gray-600 text-sm'>{services.description}</p>

                </div>
            ))
        }
    </div>
   </section>
  )
}

export default Services