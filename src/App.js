import Dictionary from "./Dictionary.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="purple" />
        <Footer />
      </div>
    </div>
  );
}
