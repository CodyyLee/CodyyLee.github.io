import React, { useState, useEffect } from "react";
import "./Contact.scss";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';

export default function Contact() {

    const [toggle, setToggle] = useState(0);
    const [time, setTime] = useState(null);
    const [final, setFinal] = useState();

    const change = e => {
        if(e.target.tagName !== 'svg') {
            setToggle(e.target.parentElement.id);
            for(let i = 0; i < 4; i++) {
                let current = document.getElementById(i);

                if(current.classList.contains('selected')) {
                    current.classList.remove('selected');
                }
            }
            e.target.parentElement.classList.add('selected');
        } else {
            setToggle(e.target.id);
            for(let i = 0; i < 4; i++) {
                let current = document.getElementById(i);
                if(current.classList.contains('selected')) {
                    current.classList.remove('selected');
                }
            }
            e.target.classList.add('selected');
        }
    }

    useEffect(() => {
        axios.get('http://worldtimeapi.org/api/America/Detroit')
            .then((res) => {
                setTime(res.data.datetime);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        if(time !== null) {
            let split = time.split('T');
            let myTime = [];
            let string = "";
            let front;
            let endings = ['AM', 'PM'];
            let final;

            for(let i = 0; i < 5; i++) {
                myTime.push(split[1][i])
            }

            myTime.map((el) => {
                string = string + el;
            })

            front = string[0] + string[1]

            if(parseInt(front) > 12 && parseInt(front) < 24) {
                final = endings[1];
            } else {
                final = endings[0];
            }

            if(parseInt(front) >= 13) {
                front = parseInt(front) - 12
                string = `${front}:${string[3]}${string[4]}${final}`
            }

            setFinal(string)
        }
    }, [time])

    const output = () => {
        switch(toggle) {
            case '0':
                return (
                    <div className="section">
                        <h2>PHONE</h2>
                        <a href="tel:12087242513">(208)-724-2513</a>
                    </div>
                )
            case '1':
                return (
                    <div className="section">
                        <h2>EMAIL</h2>
                        <a href="mailto:cody.l.garrett22@gmail.com" className="email">cody.l.garrett22@gmail.com</a>
                    </div>
                )
            case '2':
                return (
                    <div className="section">
                        <h2>LINKEDIN</h2>
                        <a href="https://www.linkedin.com/in/cody-garrett-584a2b167/" target="_blank">GO TO LINKEDIN</a>
                    </div>
                )
            case '3':
                return (
                    <div className="section">
                        <h2>GITHUB</h2>
                        <a href="https://github.com/CodyyLee" target="_blank">GO TO GITHUB</a>
                    </div>
                )
            default:
                break;
        }
    }

    return(
        <div className="container">
            <div className="content-container">
                <div className="content">
                    <div className="title">
                        <div>
                            <h1>CONTACT</h1>
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

                    <div className="contact-options">
                        <FaPhone onClick={change} id="0" className="selected"/>
                        <FaEnvelope onClick={change} id="1"/>
                        <FaLinkedin onClick={change} id="2"/>
                        <FaGithub onClick={change} id="3"/>
                    </div>

                    <div className="contact-selected">
                        {output() == undefined ? 
                        <div className="section">
                            <h2>PHONE</h2>
                            <a href="tel:12087242513">(208)-724-2513</a>
                        </div> : null}
                        
                        {output()}

                        <div className="timezone">
                            <h4>IT IS CURRENTLY</h4>
                            <p>{final}</p>
                            <h4>IN MY TIMEZONE</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}