import React from 'react'
import "./css/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
   <div className="nav">
    <div className="nav-container">
      <Link to="/"
        className="logo">Pacific <span className='logoSpan'>Quotes</span>
        </Link>
    </div>
   </div>
   </>
  )
}

export default Navbar
