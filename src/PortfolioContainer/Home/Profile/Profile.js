import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='dummy'>
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href='dummy'>
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href='dummy'>
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href='dummy'>
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href='dummy'>
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        {" "}
                        Hello, I'M <span className="highlighted-text">Atharv</span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Data Science Enthusiast 😎",
                                        2000,
                                        "Machine Learning 🤖",
                                        2000,
                                        "DBMS 💷",
                                        2000,
                                        "Predictive Analysis 📊",
                                        2000,
                                        "Python 🐍",
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href='Atharv Chaudhari.pdf' download='Atharv Chaudhari.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
