import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { CgInstagram } from 'react-icons/cg'
import { CgFacebook } from 'react-icons/cg'

import './Footer.css'

function Footer() {
  // const footStyle = {
  //   padding: '8px',
  //   margin: '5px',
  //   border: '1px solid #fff'
  // }
  return (
    <div>
      <div className="footer">
        <div className="made-by">
          <span>In conteibutions by: <div className="names">
          Kolade Richard Joseph</div> and more.</span>

          <div className="foot-icon">
            <CgFacebook className='footicons' />
            <CgInstagram className='footicons' />
            <FaWhatsapp className='footicons' />
            <FaLinkedinIn className='footicons' />
          </div>


        </div>
        <div className="gymplex">Copyright GymPlex &copy 2022</div>
      </div>
    </div>
  )
}

export default Footer
