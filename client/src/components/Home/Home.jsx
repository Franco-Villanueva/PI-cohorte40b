import React from "react";
import styles from './Home.module.css'
import Nav from "./Nav/Nav";
import Cards from "./Cards/Cards";
import {  useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


export default function Home({setSearchResults}) {

    const location = useLocation();
    const allVideoGames = useSelector(state=>state.allVideoGames)

    React.useEffect(() => {
        setSearchResults([]);
    }, []);

    return (
    <>
        <div className={styles.divMain}>
            
                <Nav  />

                {location.pathname === '/home' && <Cards allVideoGames={allVideoGames} />}

        </div>


    </>
    )
}
