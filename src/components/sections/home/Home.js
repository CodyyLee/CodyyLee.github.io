import React from "react";
import "./home.scss";
import { FaPowerOff } from "react-icons/fa";

export default function Home(props) {

    const powerUp = e => {
        e.preventDefault();
        const child = document.getElementsByTagName("h1");

        const power = document.getElementById("power");

        power.style.animationPlayState = "paused";

        setTimeout(() => {
            power.style.animation = "min 1s forwards"
        }, 500);

        Array.from(child).forEach((el, key) => {
            if(key === 0) {
                el.style.animation = "top 3s forwards";
            }
            else {
                el.style.animation = "bottom 3s forwards";
            }
        })

        setTimeout(() => {
            props.history.push("/overview")
        }, 2000);
    }

    return (
        <div className="container">
            <div className="heading" id="head">
                <h1>CODY GARRETT</h1>
                
                <FaPowerOff id="power" className="power" onClick={powerUp}/>
                
                <h1>DEVELOPER</h1>
            </div>
        </div>
    )
}