import React from "react";

export default function Synonyms(props) {
  //console.log(props.synonyms);
  if (props.synonyms.length === 0) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        <b>Synonyms: </b>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }
}
