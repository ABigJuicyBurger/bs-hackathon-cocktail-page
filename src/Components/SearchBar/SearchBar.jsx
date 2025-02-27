import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  // search bar will contain what user in putting + cocktail info + return filtered cocktails
  const [input, setInput] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

  // another fnxn for filter buttons

  function handleTextChange(event) {
    setInput(event.target.value); // user types
    // console.log(input);
  }

  const fetchUserCocktails = async () => {
    // accept current input instead
    const lowerCaseinput = input.toLowerCase();
    const response = await axios.get(`${baseUrl}${lowerCaseinput}`); // this will fetch user search
    const cocktailResult = response.data.drinks;
    setCocktails(cocktailResult);
    console.log(cocktails);
  };

  useEffect(() => {
    fetchUserCocktails();
  }, []); // on load

  function handleClick() {
    console.log("clicked!");
    fetchUserCocktails(); // only fetch on click
  }

  return (
    <>
      <div>
        <label htmlFor="name">Search up a cocktail</label>
        <input
          name="name"
          type="text"
          value={input}
          placeholder="Gin and Tonic"
          onChange={handleTextChange}
        ></input>
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
