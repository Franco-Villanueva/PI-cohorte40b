import React, { useEffect } from "react";
import Cards from "../Home/Cards/Cards";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "../Home/Nav/SearchBar/SearchBar";
import styles from './SearchResult.module.css'



export default function SearchResult({ searchResults, setSearchResults, page, perPage }) {
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
        <>
        <div className={styles.divBackground}>
        <div className={styles.divMain}>
            <Link to='/home'>
            <button className={styles.buttonBack}>Home</button>
            </Link>
            <SearchBar />
            <h1>results with : {name}</h1>
            <Cards allVideoGames={searchResults} page={page} perPage={perPage} />
            </div>
        </div>
        </>
    );
}