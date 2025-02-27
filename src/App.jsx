import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import GalleryPage from "./pages/GalleryPage/GalleryPage.jsx";
import CocktailPage from "./pages/CocktailPage/CocktailPage.jsx";
import "./App.scss";
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
          <GalleryPage />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
