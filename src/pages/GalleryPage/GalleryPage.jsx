import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "../../components/Gallery/Gallery";
import SearchBar from "../../Components/SearchBar/SearchBar";

function GalleryPage() {
  const [cocktails, setCocktails] = useState([]);
  const [filterCocktails, setFilterCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCocktails = async () => {
    setLoading(true);
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
      console.error("Error fetching cocktails:", error);
      setError("Failed to fetch cocktails");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterCocktails = (searchResults) => {
    console.log("Filter Results Received:", searchResults);
    setFilterCocktails(searchResults);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  if (loading) {
    return <div>Loading cocktails...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <SearchBar onFilter={handleFilterCocktails} />
      <Gallery filterCocktails={filterCocktails} defaultCocktails={cocktails} />
    </>
  );
}

export default GalleryPage;
