import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
      This website is designed and developed by <Link className='lokanath' to="https://lokanath.netlify.app/" target='blank'> Lokanath Panda</Link>
    </div>
    </div>
  )
}

export default Footer
