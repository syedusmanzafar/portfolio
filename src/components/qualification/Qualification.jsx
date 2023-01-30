import React, {useState} from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex"
                 : "qualification__button button--flex"}
                 
                 onClick={() => toggleTab(1)}
                 >
                    
                <i className="qualification__icon"></i>{" "} Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex"
                 : "qualification__button button--flex"}
                 onClick={() => toggleTab(2)}
                 >
                    <i className="qualification__icon"></i>{" "} Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Rembrandt College</h3>
                            <span 
                            className="qualification__subtitle">Veenendaal </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2018
                                </div>
                        </div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Grafisch Lyceum</h3>
                            <span className="qualification__subtitle">Utrecht</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2022
                                </div>
                        </div>
                    </div>

                    
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            
                            <h3 className="qualification__title">Intern Pinkstudio</h3>
                            <span className="qualification__subtitle">Web / Graphic design</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                        </div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Intern Australian</h3>
                            <span className="qualification__subtitle">Graphic design</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                        </div>
                    </div>

                    <div className="qualification__data">

                            <div>
                            <h3 className="qualification__title">Freelance</h3>
                            <span className="qualification__subtitle">Web / Graphic design</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                        </div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>

                    </div>

                </div>
            </div>
            </div>
    </section> 
  )
}

export default Qualification