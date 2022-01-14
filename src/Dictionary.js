import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //API documentation: https://dictionaryapi.dev/
    let apiEndpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    let apiUrl = `${apiEndpoint}${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a word for a definition"
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
      </form>
      <Results results={results} />
    </div>
  );
}
