import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for definition of "${keyword}"`);
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
    </div>
  );
}
