import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
      
            <ul className="footer__list">
                <li>
                  <a href="#about" className="footer__link">About</a>  
                </li>

                <li>
                  <a href="#skills" className="footer__link">Skills</a>  
                </li>

                <li>
                  <a href="#portfolio" className="footer__link">Portfolio</a>  
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/raphael-mateman-8085a31a5/" className="home_social-icon" target="_blank">
        <i class="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/raphaellmm" className="home_social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
        </a>
            </div>

            <span className="footer__copy">
                &#169; All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer