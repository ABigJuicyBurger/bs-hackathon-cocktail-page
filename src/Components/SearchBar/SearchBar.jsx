import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar({ onFilter }) {
  const [input, setInput] = useState("");

  const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

  function handleTextChange(event) {
    setInput(event.target.value);
  }

  const fetchUserCocktails = async () => {
    const lowerCaseInput = input.toLowerCase();
    console.log("Fetching cocktails for input:", lowerCaseInput);
    try {
      const response = await axios.get(`${baseUrl}${lowerCaseInput}`);
      const cocktailResult = response.data.drinks || [];
      console.log("Filtered cocktails:", cocktailResult);
      onFilter(cocktailResult);
    } catch (error) {
      console.error("Error fetching user cocktails:", error);
    }
  };

  useEffect(() => {
    if (input) {
      fetchUserCocktails();
    }
  }, [input]);

  return (
    <div>
      <label htmlFor="name">Search up a cocktail</label>
      <input
        name="name"
        type="text"
        value={input}
        placeholder="Gin and Tonic"
        onChange={handleTextChange}
      />
    </div>
  );
}

export default SearchBar;
