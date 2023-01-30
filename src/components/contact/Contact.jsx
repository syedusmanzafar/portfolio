import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">r.mateman@hotmail.com</span>

                        <a href="mailto:r.mateman@hotmail.com" 
                        className="contact__button"> Write me {""}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    
                     </div>
            </div>
            <div className="contact__content">
            <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bxl-linkedin contact__card-icon"></i>

                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">Raphael Mateman</span>

                        <a href="https://www.linkedin.com/in/raphael-mateman-8085a31a5/" 
                        className="contact__button"> Write me {""}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div></div>
                </div>
        </div>
    </section>
  )
}

export default Contact