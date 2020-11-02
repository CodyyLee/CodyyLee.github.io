import React, { useState } from "react";
import "./Projects.scss";
import Modal from "./modal/Modal";

export default function Project() {

    const [slide, setSlide] = useState([
        {
            title: "Project 1",
            image: "",
            desc: ""
        },
        {
            title: "Project 2",
            image: "",
            desc: ""
        },
        {
            title: "Project 3",
            image: "",
            desc: ""
        }
    ]);

    const [current, setCurrent] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false);

    const previous = e => {
        e.preventDefault();

        if(current === 0) {
            return null;
        } else {
            if(window.innerWidth > 1365) {
                let cont = document.querySelector(".pr-title");
                let cont1 = document.querySelector(".pr-desc");

                cont.style.animation = "projectTransOut .5s forwards";
                cont1.style.animation = "projectTransOut .5s forwards";
                
                setTimeout(() => {
                    cont.style.animation = "projectTransIn .5s forwards";
                    cont1.style.animation = "projectTransIn .5s forwards";
                    setCurrent(current - 1);
                }, 600);
            } else {
                let image = document.querySelector(".pr-img");
                image.style.animation = "slideNext 1s forwards";
                
                setTimeout(() => {
                    image.style.animation = "slideNext2 1s forwards";
                    setCurrent(current - 1);
                }, 600);
            }
        }
    }

    const next = e => {
        e.preventDefault();

        if(current === (slide.length - 1)) {
           return null;
        } else {
            if(window.innerWidth > 1365) {
                let cont = document.querySelector(".pr-title");
                let cont1 = document.querySelector(".pr-desc");

                cont.style.animation = "projectTransOut .5s forwards";
                cont1.style.animation = "projectTransOut .5s forwards";
                
                setTimeout(() => {
                    cont.style.animation = "projectTransIn .5s forwards";
                    cont1.style.animation = "projectTransIn .5s forwards";
                    setCurrent(current + 1);
                }, 600);
            } else {
                let image = document.querySelector(".pr-img");
                image.style.animation = "slideNext 1s forwards";
                
                setTimeout(() => {
                    image.style.animation = "slideNext2 1s forwards";
                    setCurrent(current + 1);
                }, 600);
            }
        }
    }

    const modal = e => {
        if(window.innerWidth < 1365) {
            setOpen(true);
        } else {
            return;
        }
    }

    return (
        <div className="pr-container">
            {open ? <Modal setOpen={setOpen} slide={slide} current={current}/> : null}
            <div className="pr-content">
                <div className="title">
                    <div>
                        <h1>PROJECTS</h1>
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

                <div className="pr-about">
                    <div className="pr-title">
                        <h2>{slide[current].title}</h2>
                        <img className="pr-img" src="https://picsum.photos/200/300" alt="project preview" onClick={modal}/>
                    </div>

                    {width >= 1365 ? <div className="pr-desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut dui non est imperdiet maximus. Curabitur erat ligula, dictum sit amet rutrum eget, bibendum id nulla. Nulla fermentum lectus nec purus suscipit tincidunt sit amet nec nisi.</p><a href="#" target="_blank">View Page</a></div> : null}

                    <div className="buttons">
                        {current === 0 ? <button onClick={previous} disabled>Previous</button> : <button onClick={previous}>Previous</button>}

                        {current === slide.length - 1 ? <button onClick={next} disabled>Next</button> : <button onClick={next}>Next</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}