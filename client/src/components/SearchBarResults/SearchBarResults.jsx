import React, { useEffect } from "react";
import Cards from "../Home/Cards/Cards";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function SearchResult({ searchResults, setSearchResults }) {
    const { name } = useParams();

    useEffect(() => {
        const axiosSearchResults = async () => {
            try {
                const response = await axios(`http://localhost:3001/games/onsearch?game=${name}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        axiosSearchResults();
        return ()=> setSearchResults([]);
    }, [name, setSearchResults]);

    return (
        <div>
                    
            <Cards allVideoGames={searchResults} />
            <p>resultados con: {name}</p>
        </div>
    );
}