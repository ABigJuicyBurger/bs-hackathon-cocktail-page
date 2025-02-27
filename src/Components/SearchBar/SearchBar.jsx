import { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/SearchBar.scss";

function SearchBar({ onFilter }) {
  const [input, setInput] = useState("");
  const [filterCocktails, setFilterCocktails] = useState(null);
  const [defaultCocktails, setDefaultCocktails] = useState(null);

  const fetchDefaultCocktails = async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      setDefaultCocktails(response.data.drinks);
    } catch (error) {
      console.error("Failed to fetch default cocktails:", error);
    }
  };

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

      onFilter(response.data.drinks);
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
      <div className="container">
        <label className="search-label" htmlFor="name">
          Search up a cocktail
        </label>
        <input
          className="search-input"
          name="name"
          type="text"
          value={input}
          placeholder="Gin and Tonic"
          onChange={handleTextChange}
        />
        <img src="./Styles/Assets/SearchIcon.svg" alt="" />

        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
