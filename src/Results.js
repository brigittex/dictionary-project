import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    //console.log(props.results);
    return (
      <div className="Results">
        <hr />
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} /> <hr />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}