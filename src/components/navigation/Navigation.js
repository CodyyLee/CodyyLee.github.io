import React, { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaProjectDiagram, FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./nav.scss";

export default function Navigation(props) {

    const [curLoc, setCurLoc] = useState();

    useEffect(() => {
        const parent = document.getElementById("nav");
        const icons = parent.querySelectorAll("svg");

        const loc = props.location.pathname;
        const length = loc.length;

        if(length > 1) {
            let item = document.getElementById(loc.substring(1, length));
            let sibling = item.previousSibling;

            Array.from(icons).map(svg => {
                    svg.style.color = "#666";
                })

            sibling.style.color = "#00ffff";
            
        } else {
            let item = document.getElementById("main")
            let sibling = item.previousSibling;

            console.log(sibling)

            Array.from(icons).map(svg => {
                    svg.style.color = "#666";
                })
            sibling.style.color = "#00ffff";
        }
        
    }, [props.location.pathname])
    
    return (
        <nav id="nav">
            <ul className="navbar-nav">
                <Link to="/">
                    <li className="nav-item">
                        <FaHome className="icon" />
                        <span id="main">MAIN</span>
                    </li>
                </Link>

                <Link to="/overview">
                    <li className="nav-item">
                        <FaUserAlt className="icon"/>
                        <span id="overview">OVERVIEW</span>
                    </li>
                </Link>

                <Link to="/projects">
                    <li className="nav-item">
                        <FaProjectDiagram className="icon" />
                        <span id="projects">PROJECTS</span>
                    </li>
                </Link>

                <Link to="/contact">
                    <li className="nav-item">
                        <FaAddressCard className="icon" />
                        <span id="contact">CONTACT</span>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}