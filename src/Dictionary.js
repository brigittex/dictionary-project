import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Images from "./Images.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [images, setImages] = useState([]);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleImageResponse(response) {
    //console.log(response);
    setImages(response.data.photos);
  }

  function search() {
    //API documentation: https://dictionaryapi.dev/
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let imageApiKey =
      "563492ad6f91700001000001904c8b42025744df854946f387d8fda8";
    let imageApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    let headers = { Authorization: `Bearer ${imageApiKey}` };
    axios.get(imageApiUrl, { headers: headers }).then(handleImageResponse);
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
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
