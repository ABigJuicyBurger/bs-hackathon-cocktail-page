import { BrowserRouter } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery.jsx";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Intro from "./Components/Intro/Intro";

function App() {
  // TESTING GIT BRANCHING
  // so wwen pushing let leader merge through sending PR, then pull when you make changes

  return (
    <>
      <Header />
      <Intro />
      <SearchBar />
      <BrowserRouter>
        <div className="App">
          <Gallery />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
