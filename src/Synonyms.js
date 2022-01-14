import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  //console.log(props.synonyms);
  if (props.synonyms.length === 0) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        <ul>
          <li>
            <b>Synonyms: </b>
          </li>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }
}
