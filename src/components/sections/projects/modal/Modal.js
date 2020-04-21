import React from "react";
import "./Modal.scss";

export default function Modal(props) {

    const close = e => {
        const modal = document.querySelector(".modal-container");
        const modalInner = document.querySelector(".modal-content");
        const modalDesc = document.querySelector(".modal-desc");

        modal.style.animation = "fadeOut .6s forwards";
        modalInner.style.animation = "slideOut .6s forwards";
        modalDesc.style.animation = "fadeOut .1s forwards";

        setTimeout(() => {
            props.setOpen(false);
        }, 1000);
    }
    
    return (
        <div className="modal-container" onClick={close}>
            <div className="modal-content">
                <h3>{props.slide[props.current].title}</h3>

                <div className="modal-desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut dui non est imperdiet maximus. Curabitur erat ligula, dictum sit amet rutrum eget, bibendum id nulla. Nulla fermentum lectus nec purus suscipit tincidunt sit amet nec nisi.</p>
                </div>

                <a href="#" target="_blank">View Page</a>
            </div>
        </div>
    )
}