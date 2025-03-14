import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footerSection = () => {
  return (
    <div className='footer' id='footer'><div className="footer-content">
        
        
        <div className="footer-content-left">
<img src={assets.logo} alt=""></img>
<p>This is just dummy text</p>
<div className="footer-social-icons">

<img src={assets.facebook_icon} alt="">
</img>
<img src={assets.linkedin_icon} alt=""></img>
<img src={assets.twitter_icon} alt=""></img>

</div>

        </div>
        <div className="footer-content-center">

<h2> COMPANY</h2>
<ul>
<li>Home</li>
<li>About us</li>
<li>Delivery</li>
<li>Privacy Policy</li>
</ul>
        </div>
        <div
         className="footer-content-right">

<h2>Get in Touch</h2>
<ul>
<li>+1-2-3-22-2--4444-6</li>
<li>Send@gmail.com</li>

</ul>
        </div>
        </div>
        <hr></hr>
        <p className="footer-copyright">copyright goes here</p>
        </div>
  )
}

export default footerSection