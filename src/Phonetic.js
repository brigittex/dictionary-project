import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  //console.log(props.phonetic);

  function playAudio(event) {
    event.preventDefault();
    const audio = new Audio(props.phonetic.audio);
    audio.play();
  }
  return (
    <div className="Phonetic">
      <a href="/" onClick={playAudio}>
        <i className="fas fa-volume-up"></i>
      </a>
      <span className="text">[{props.phonetic.text}]</span>
    </div>
  );
}
