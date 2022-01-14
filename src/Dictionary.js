import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //API documentation: https://dictionaryapi.dev/
    let apiEndpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    let apiUrl = `${apiEndpoint}${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="App-header">📚 Dictionary 📚</h1>
        <section>
          <h2 className="App-header">What would you like to look up?</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a word to look up"
                  defaultValue={props.defaultKeyword}
                  autoFocus
                  autoComplete="off"
                  onChange={handleKeywordChange}
                />
              </div>

              <div className="col-2">
                <button type="submit" className="btn btn-primary float-end">
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </div>
            <div className="hint">suggested words: beach, orange, summer</div>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
