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
                                <p>I got my first taste of programming at the age of 14 by creating automation
                                programs for my favorite MMORPG of that time. To be able to write code and produce something both useful for myself
                                and for others was an incredible feeling.</p>
                                <br/>
                                <p>Once I got a taste of what programming had to offer I was hooked. I began creating
                                little programs to automate many tasks that I found myself repeating thorughout the day.
                                Things like programmable autoclickers that tracked positions, color changes, and reacted differently
                                depending on certain circumstances or programs to map application launches, events and so much more to the push of a button.
                                The feeling was incredible.</p>
                                <br/>
                                <p>A couple of years later I found myself playing around with web development languages and creating small websites.
                                It wasn't until the end of 2019, however, that I started getting serious about it as a career.</p>
                                <br/>
                                <p>I joined Lambda School's course for Full Stack Development and realized just how much there
                                is to learn on both the Front End and the Back End side of things, and I can't get enough.
                                To be able to learn whilst also creating is a dream come true.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}