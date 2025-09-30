import React from 'react'

const workData = [
  {
    id: 1,
    title: "Product 1 — Growth & Resilience",
    description:
      "Shipped v1 in 8 weeks; 99.95% uptime; 40% faster onboarding.",
    tags: ["React", "Node", "AWS", "Postgres"],
  },
  {
    id: 2,
    title: "Product 2 — Growth & Resilience",
    description:
      "Shipped v1 in 8 weeks; 99.95% uptime; 40% faster onboarding.",
    tags: ["React", "Node", "AWS", "Postgres"],
  },
  {
    id: 3,
    title: "Product 3 — Growth & Resilience",
    description:
      "Shipped v1 in 8 weeks; 99.95% uptime; 40% faster onboarding.",
    tags: ["React", "Node", "AWS", "Postgres"],
  },
];
const Selectedwork = () => {
  return (
  <section className='px-8 md:px-20 py-16  bg-white'>
    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Selected Work</h2>
        <p className='text-gray-500 text-lg mb-10'>A few outcomes we’ve helped create.</p>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
         {
            workData.map((work, index)=>(
                 <div key={index} className='border-none rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition'>
                    <p className='text-sm text-gray-500'>Case study</p>
                    <h3 className='text-lg font-semibold text-gray-900'>{work.title}</h3>
                     <p className='text-gray-600 text-sm'>{work.description}</p>
                     <div className='flex flex-wrap gap-2 mt-4'>
                        {work.tags.map((tag)=>(
                            <span key={tag}>
                                 <p className='px-3 py-1 bg-gray-100 text-gray-700  text-sm rounded-full'>{tag}</p>
                            </span>
                        ))}
                     </div>
                     <a href="" className='inline-block mt-4 text-sm font-medium text-gray-900 underline hover:text-blue-600'>View details</a>

                </div>
            ))
         }
        </div>
   
   </section>
  )
}

export default Selectedwork
