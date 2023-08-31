import React from "react";
import styles from './Home.module.css'
import Nav from "./Nav/Nav";
import Cards from "./Cards/Cards";
import {  useSelector } from "react-redux";
import Filters from "../Filters/Filters";


export default function Home({setSearchResults, page, perPage,max}) {

    const allVideoGames = useSelector(state=>state.allVideoGames)


    React.useEffect(() => {
        setSearchResults([]);
    }, []);

    return (
    <>
    <div className={styles.divBackground}>
        <div className={styles.divMain}>

                <Nav  />
                <div className={styles.divFilters}>
                    <Filters />  
                </div>
                <Cards allVideoGames={allVideoGames} page={page} perPage={perPage} max={max}  />
        </div>
    </div>

    </>
    )
}
