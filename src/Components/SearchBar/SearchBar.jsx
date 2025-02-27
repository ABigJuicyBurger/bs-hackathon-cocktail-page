import { useState, useEffect } from "react";
import axios from "axios";
import GalleryPage from "/src/pages/GalleryPage/GalleryPage";

function SearchBar() {
  const [input, setInput] = useState("");
  const [filterCocktails, setFilterCocktails] = useState(null);
  const [defaultCocktails, setDefaultCocktails] = useState(null);
  const fetchDefaultCocktails = async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      setDefaultCocktails(response.data);
    } catch (error) {
      console.error("Failed to fetch default cocktails:", error);
    }
  };
  // Fetch default cocktails on component mount
  useEffect(() => {
    fetchDefaultCocktails();
  }, []);
  function handleTextChange(event) {
    setInput(event.target.value);
  }
  const searchCocktails = async (searchInput) => {
    try {
      const firstLetter = searchInput.charAt(0).toLowerCase();
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`
      );
      setFilterCocktails(response.data.drinks);
    } catch (error) {
      console.error("Search failed:", error);
      setFilterCocktails(null);
    }
  };
  function handleClick() {
    searchCocktails(input);
  }
  return (
    <>
      <div className="searchBar">
        <label htmlFor="name">Search up a cocktail</label>
        <input
          name="name"
          type="text"
          value={input}
          placeholder="Gin and Tonic"
          onChange={handleTextChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="gallery">
        <GalleryPage
          searchResults={filterCocktails}
          defaultCocktails={defaultCocktails}
        />
      </div>
    </>
  );
}

export default SearchBar;












