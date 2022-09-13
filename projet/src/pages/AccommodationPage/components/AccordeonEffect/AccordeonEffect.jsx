import React, { useState, useRef } from "react";
import ChevronLocation from "./ChevronLocation";

// STYLE
import "../AccordeonEffect/AccordeonEffect.css";

// --------------------------------------------------------------

export default function AccordeonEffect(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordionlocation__icon");

  const content = useRef(null);

  function toggleAccordeonEffect() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordionlocation__icon" : "accordionlocation__icon rotate"
    );
  }

  return (
    <div className="accordionlocation__section">
      <button className={`accordionlocation ${setActive}`} onClick={toggleAccordeonEffect}>
        <p className="accordionlocation__title">{props.title}</p>
        <ChevronLocation className={`${setRotate}`} width={10} fill={"white"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}`}}
        className="accordionlocation__content"
      >
        <div><div className="accordionlocation__text">{props.content}</div></div>
      </div>
    </div>
  );
}