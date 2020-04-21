import React from "react";
import "./About.scss";

import img from "../../../images/profile.jpg";

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
                                <p><span>SPECIALTY:</span></p>
                                <p>FRONT END DEVELOPMENT</p>

                                <p><span>FRAMEWORK USED:</span></p>
                                <p>REACTJS</p>
                            </div>
                        </div>
                        <div className="text">
                            <div className="text-container">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut dui non est imperdiet maximus. Curabitur erat ligula, dictum sit amet rutrum eget, bibendum id nulla. Nulla fermentum lectus nec purus suscipit tincidunt sit amet nec nisi. Nulla porta vehicula sollicitudin. Nam quis tempus libero. Duis metus ipsum, congue fringilla eleifend non, elementum quis mauris. Quisque eget turpis ligula. Donec at dolor pellentesque, tincidunt velit id, aliquam sem.</p>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut dui non est imperdiet maximus. Curabitur erat ligula, dictum sit amet rutrum eget, bibendum id nulla. Nulla fermentum lectus nec purus suscipit tincidunt sit amet nec nisi. Nulla porta vehicula sollicitudin. Nam quis tempus libero. Duis metus ipsum, congue fringilla eleifend non, elementum quis mauris. Quisque eget turpis ligula. Donec at dolor pellentesque, tincidunt velit id, aliquam sem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}