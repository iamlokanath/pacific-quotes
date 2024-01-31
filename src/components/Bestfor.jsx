import React from 'react'
import './css/Bestfor.css';
import bestLeft from '../image/best-left.png';
import bestRight from '../image/best-right.png';
import bestMain from '../image/twitter-removebg-preview.png';
const Bestfor = () => {
  return (
    <div className="best">
        <div className="best-container">
            <div className="best-left">
                <div className="best-left-photo">
                    <img src={bestLeft} alt="best left" />
                </div>
            </div>
            <div className="best-main">
                <div className="best-heading">
                    Best For
                </div>
                <div className="best-heading-photo">
                    <img src={bestMain} alt="best heading" />
                </div>
            </div>
            <div className="best-right">
                <div className="best-right-photo">
                    <img src={bestRight} alt="best right" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bestfor
