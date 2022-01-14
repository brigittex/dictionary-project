import React from "react";
import "./Meaning.css";
import Example from "./Example.js";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <b>Definition: </b>
            {definition.definition}
            <Example example={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
