import React from 'react'
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
          You can write it here.
        </p>
        <div className="input-area">
          
              
              
            <Button buttonStyle="btn--outline" linkTo="/writeReview" >Write it
            </Button>

         
        </div>
      </section>
      <div className="footer-links">
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <a href='/aboutMe'>Who I am</a>
          </div>
          <div className='footer-link-items'>
            <h2>Work experience</h2>
            <a href='/myExperience'>My experience</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <a href='/contact'>Find me</a>

          </div>
          <div className='footer-link-items'>
            <h2>Reviews</h2>
            <a href='/reviews'>My Reviews</a>

          </div>
        </div>
      </div>

    </div>
  )
}

export default footer
