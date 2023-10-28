import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <>
      <div>
        <div className='navbar'>
            <div className='navbar1'>
                <div>
                    <input  placeholder='Search'/>
                </div>
                <div>
                    <i class="fa-solid fa-magnifying-glass" style={{color: "#707070"}}></i>
                </div>
            </div>
            <div className='navbar2'>
                <i class="fa-solid fa-microphone" style={{color: "#f1f2f3"}}></i>
            </div>
            <div className='navbar3'>
                <i class="fa-solid fa-video" style={{color: "#cececf"}}></i>
            </div>
            <div className='navbar4'>
                <i class="fa-regular fa-bell" style={{color: "#dbdbdc"}}></i>
            </div>
            <div className='navbar5'>Y</div>
        </div>
      </div>
    </>
  )
}

export default Homepage
