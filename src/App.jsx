
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery.jsx";
import CocktailPage from "./pages/CocktailPage/CocktailPage.jsx";
import "./App.scss";


function App() {
  // TESTING GIT BRANCHING
  // so wwen pushing let leader merge through sending PR, then pull when you make changes

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/cocktail/:id" element={<CocktailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
