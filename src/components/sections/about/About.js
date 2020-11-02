import React from "react";
import "./About.scss";

import img from "../../../images/profile.jpg";
import { FaReact, FaHtml5, FaCss3, FaLess, FaSass, FaNode, FaJs} from 'react-icons/fa';

export default function About() {

    return (
        <div className="about-container">
            <div className="content-container">
                <div className="content">
                    <div className="title">
                        <div>
                            <h1>OVERVIEW</h1>
                        </div>
                        <div className="line-container">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="content-desc">
                        <div className="photo">
                            <div className="photo-container">
                                <img className="about-img" src={img} alt="Cody Garrett" />
                                <h3>CODY GARRETT</h3>
                            </div>

                            <div className="stats">
                                <p>SKILLS:</p>
                                <div className='skills'>
                                    <FaHtml5/>
                                    <FaCss3/>
                                    <FaLess/>
                                    <FaSass/>
                                    <FaJs/>
                                    <FaReact/>
                                    <FaNode/>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <div className="text-container">
                                <h3>Hi, I'm Cody</h3>
                                <br/>
                                <p>I first became interested in programming at the age of 14 when I was introduced to creating automation programs for MMORPGs. Writing code to produce something useful for myself and for others was a rewarding experience.</p>
                                <br/>
                                <p>I began creating programs to automate many tasks that I found myself repeating throughout the day, such as, programmable mouse automation tools that allowed users to track positioning and pixel color to enable or disable certain events and programs to launch an application or a series of applications, macros or both at the press of a button. The possibilities were endless and it only furthered my desire to continue to learn.</p>
                                <br/>
                                <p>A couple of years later I found myself delving into web development languages and creating small websites. It wasn't until the end of 2019 that I started getting serious about pursuing it as a career.</p>
                                <br/>
                                <p>I enrolled into Lambda School's course for Full Stack Development and realized just how much there is to learn on both the Front End and the Back End side of things. I thoroughly enjoy creating web applications while also getting the opportunity to grow as a developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}