import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">📚 Dictionary 📚</header>
        <Dictionary />
        <footer>
          {" "}
          <div>
            Project coded by Brigitte Giguère{" "}
            <i className="fab fa-canadian-maple-leaf"></i>
          </div>
          <div>
            Open-source code on{" "}
            <a
              href="https://github.com/brigittex/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div>
            Hosted on{" "}
            <a
              href="https://laughing-tereshkova-bb3f81.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
