import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const FaqData =[
  {
    question:"What’s the typical engagement model?",
    answer:"We offer project‑based builds and monthly retainers for ongoing product development and SRE.",
  },
   {
    question:"How do you ensure code quality?",
    answer:"Peer reviews, automated tests, CI pipelines, and observability from day one.",
  },
    {
    question:"Can you work with our existing team?",
    answer:"Absolutely—embedded squads or leadership augmentations are common.",
  },
]

const Faq = () => {
  const [open, setOpen] = useState(null);

  const togleFAQ = (index) =>{
    setOpen(open === index ? null : index);
  }
  return (
      <section className='px-8 md:px-20 py-16 bg-white'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>FAQ</h2>
        <div className='w-[900px]'>
        {FaqData.map((faq, index)=>(
          <div key={index} className='border-b border-gray-200 py-4'>
            <button className='w-full text-left flex justify-between items-center' onClick={()=> togleFAQ(index)}>
              <span className='text-lg font-medium'>{faq.question}</span>
              <span className='text-gray-500'>{open===index?<ChevronUp size={20}/>: <ChevronDown size={20}/>}</span>
            </button>
            {open===index&&(
              <p className='mt-2 text-gray-600'>{faq.answer}</p>
            )}
          </div>
        ))}
        </div>
        </section>
  )
}

export default Faq
