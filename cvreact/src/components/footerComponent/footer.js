import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../buttonComponent/Button'
import './Footer.css'

function footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          If you want to write a review of me
        </p>
        <p className="footer-subscription-text">
          You can request it here.
        </p>
        <div className="input-area">
          <form>
            <input type="email" name="email" placeholder="Your Email"
              className="footer-input" />
            <Button buttonStyle="btn--outline" linkTo="/">Request
            </Button>

          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/aboutMe'>Who I am</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Work experience</h2>
            <Link to='/workExperience'>My experience</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/contact'>Find me</Link>
            
          </div>
          <div className='footer-link-items'>
            <h2>Reviews</h2>
            <Link to='/reviews'>My Reviews</Link>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default footer
