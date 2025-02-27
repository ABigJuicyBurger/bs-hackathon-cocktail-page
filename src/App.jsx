import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './Components/RecipePage/RecipePage';
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Gallery from "./components/Gallery/Gallery.jsx";
import "./App.scss";

function App() {
  // TESTING GIT BRANCHING
  // so wwen pushing let leader merge through sending PR, then pull when you make changes

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SearchBar />
        <Gallery />
        <Routes>
          <Route path="/cocktail/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
