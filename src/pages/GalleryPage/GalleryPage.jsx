import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import SearchBar from "../../Components/SearchBar/SearchBar";

function GalleryPage() {
  const [cocktails, setCocktails] = useState([]);
  const [filterCocktails, setFilterCocktails] = useState([]);

  // Fetch all cocktails when the page loads
  const fetchCocktails = async () => {
    console.log("Fetching cocktails...");
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      console.log("API Response:", response.data);

      if (response.data && response.data.drinks) {
        setCocktails(response.data.drinks);
        setFilterCocktails(response.data.drinks);
      } else {
        setCocktails([]);
        setFilterCocktails([]);
      }
    } catch (error) {
      console.error("Error at gallerypage:", error);
      setCocktails([]);
    }
  };

  const handleFilterCocktails = (searchResults) => {
    console.log("Filter Results Received:", searchResults);
    setFilterCocktails(searchResults);
  };

  useEffect(() => {
    console.log("Running useEffect for fetching cocktails");
    fetchCocktails();
  }, []);

  return (
    <>
      <SearchBar onFilter={handleFilterCocktails} />
      <Gallery filterCocktails={filterCocktails} />
    </>
  );
}

export default GalleryPage;
