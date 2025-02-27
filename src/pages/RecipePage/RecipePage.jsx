import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '/src/components/Header/Header.jsx';
import RecipeCard from '/src/components/RecipeCard/RecipeCard.jsx';
import './RecipePage.scss';

function RecipePage() {
    const [cocktail , setCocktail] = useState(null);
    const params = useParams();

    return (
        <>
            <Header />
            <main>

            </main>
            <Footer />
        </>
    )
};

export default RecipePage;