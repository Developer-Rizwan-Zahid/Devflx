import React from 'react'

const client = [
    {
        description:'“Devflx shipped our MVP in record time without sacrificing quality.”',
        paragraph:"CTO, Fintech Startup"
    
    },
     {
        description:'“Thoughtful design and rock‑solid engineering. A rare combo.”',
        paragraph:"Head of Product, SaaS"
    
    },
     {
        description:'“From CI/CD to security, they elevated our entire stack.”',
        paragraph:"Engineering Manager, Enterprise"
    
    },
]

const Clients = () => {
  return (
   <section className='px-8 md:px-20 py-16  bg-gray-100'>
     <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>What clients say</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            client.map((client, index)=>(
                <div key={index} className='border-none rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition'>
                    <div className='flex  space-x-3 mb-4'>{client.description}
                        </div>
                        <h3 className='text-lg font-semibold text-gray-500'>{client.paragraph}</h3>
                        </div>
            ))
        }
    </div>
   </section>
  )
}

export default Clients
