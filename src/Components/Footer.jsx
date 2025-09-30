import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="py-6 bg-white">
      <div className="container mx-auto text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Devflx. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
