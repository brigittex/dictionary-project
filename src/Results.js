import React from "react";
import "./Results.css";
import Phonetic from "./Phonetic.js";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    //console.log(props.results);
    return (
      <div className="Results">
        <section>
          <h3>{props.results.word}</h3>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                {" "}
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
