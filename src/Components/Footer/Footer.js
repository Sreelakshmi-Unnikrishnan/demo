import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faFacebook,
    faMailchimp,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import './Footer.css'
function Footer() {
  return (
    <div>
        <div className='footer-left'>
            <h6>Terms and Conditions</h6>
            <h6>Privacy policy</h6>
            <h6>Help and Support</h6>
            <h6>Career</h6>
        </div>
        <div className='footer-right'>
            <h1>Studyouk</h1>
            <a href="https://www.linkedin.com/in/maxzon-softwares-952054222"
        className="youtube linkedin" style={{marginLeft:"1400px",padding:"2px"}}>
        <FontAwesomeIcon icon={faLinkedin} size="1px"   />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100072065906812"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1px" />
      </a>
      <a href="mailto: maxzonsoftwares@gmail.com" className="faMailchimp social">
        <FontAwesomeIcon icon={faMailchimp} size="1px" />
      </a>
      <a href="https://instagram.com/studyouk?utm_medium=copy_link"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1px" />
      </a>
        </div>
    </div>
  )
}

export default Footer