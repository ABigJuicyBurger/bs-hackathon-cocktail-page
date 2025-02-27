import { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/SearchBar.scss";

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
    <div className="container">
      <div className="search-wrapper">
        <span className="search-icon">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="24.0221"
              cy="24"
              rx="23.8097"
              ry="23.5"
              fill="#18A0FB"
            />
            <path
              d="M34.0967 31.7949C34.4658 32.2051 34.4658 32.8203 34.0557 33.1895L32.9072 34.3379C32.5381 34.748 31.9229 34.748 31.5127 34.3379L27.4521 30.2773C27.2471 30.0723 27.165 29.8262 27.165 29.5801V28.8828C25.6885 30.0312 23.8838 30.6875 21.915 30.6875C17.1982 30.6875 13.3838 26.873 13.3838 22.1562C13.3838 17.4805 17.1982 13.625 21.915 13.625C26.5908 13.625 30.4463 17.4805 30.4463 22.1562C30.4463 24.166 29.749 25.9707 28.6416 27.4062H29.2979C29.5439 27.4062 29.79 27.5293 29.9951 27.6934L34.0967 31.7949ZM21.915 27.4062C24.7861 27.4062 27.165 25.0684 27.165 22.1562C27.165 19.2852 24.7861 16.9062 21.915 16.9062C19.0029 16.9062 16.665 19.2852 16.665 22.1562C16.665 25.0684 19.0029 27.4062 21.915 27.4062Z"
              fill="white"
            />
          </svg>
        </span>
        <label htmlFor="name" className="search-label">
          Search up a cocktail
        </label>
        <input
          name="name"
          type="text"
          value={input}
          placeholder="Gin and Tonic"
          onChange={handleTextChange}
          className="search-input"
        />
      </div>
    </div>
  );
}

export default SearchBar;
